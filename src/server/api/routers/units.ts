import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const houseUnitRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        bedrooms: z.any(),
        distance: z.any(),
        minPrice: z.any(),
        maxPrice: z.any(),
      })
    )
    .query(({ ctx, input }) => {
      console.log(input);
      return ctx.prisma.houseUnit.findMany({
        where: {
          bedrooms:
            input.bedrooms !== -1 && !Number.isNaN(input.bedrooms)
              ? input.bedrooms
              : undefined,
          distance:
            input.distance !== -1 && !Number.isNaN(input.distance)
              ? input.distance
              : undefined,
          price: {
            lte:
              input.maxPrice !== -1 && !Number.isNaN(input.maxPrice)
                ? input.maxPrice
                : undefined,
            gte:
              input.minPrice !== -1 && !Number.isNaN(input.minPrice)
                ? input.minPrice
                : undefined,
          },
        },
      });
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
