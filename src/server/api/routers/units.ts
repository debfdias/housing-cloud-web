import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const houseUnitRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        bedrooms: z.any(),
        distance: z.any(),
      })
    )
    .query(({ ctx, input }) => {
      console.log(input);
      if (Number.isNaN(input.bedrooms) && Number.isNaN(input.distance)) {
        return ctx.prisma.houseUnit.findMany();
      }
      if (input.bedrooms === -1 && input.distance === -1) {
        return ctx.prisma.houseUnit.findMany();
      }
      if (
        (Number.isNaN(input.bedrooms) || input.bedrooms === -1) &&
        (Number.isNaN(input.distance) || input.distance === -1)
      ) {
        return ctx.prisma.houseUnit.findMany();
      }
      if (
        input.bedrooms > 0 &&
        (input.distance === -1 || Number.isNaN(input.distance))
      ) {
        return ctx.prisma.houseUnit.findMany({
          where: { bedrooms: input.bedrooms },
        });
      }
      if (
        input.distance > 0 &&
        (input.bedrooms === -1 || Number.isNaN(input.bedrooms))
      ) {
        return ctx.prisma.houseUnit.findMany({
          where: { distance: input.distance },
        });
      }
      if (input.distance > 0 && input.bedrooms > 0) {
        return ctx.prisma.houseUnit.findMany({
          where: { distance: input.distance, bedrooms: input.bedrooms },
        });
      }
    }),
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.houseUnit.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
  updateInterest: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.houseUnit.update({
        where: {
          id: input.id,
        },
        data: {
          interestAmount: { increment: 1 },
        },
      });
    }),
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.houseUnit.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
