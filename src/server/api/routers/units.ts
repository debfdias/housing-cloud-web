import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const houseUnitRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.houseUnit.findMany();
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
  filterByBedrooms: publicProcedure
    .input(z.object({ bedrooms: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.houseUnit.findMany({
        where: {
          bedrooms: input.bedrooms,
        },
      });
    }),
  filterByDistance: publicProcedure
    .input(z.object({ distance: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.houseUnit.findMany({
        where: {
          distance: {
            lte: input.distance,
          },
        },
      });
    }),
  filterByPrice: publicProcedure
    .input(z.object({ min: z.number(), max: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.houseUnit.findMany({
        where: {
          price: {
            lte: input.max,
            gte: input.min,
          },
        },
      });
    }),
});
