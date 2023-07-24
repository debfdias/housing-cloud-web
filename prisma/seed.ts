import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface HouseUnit {
  name: string;
  description: string;
  imageUrl?: string;
  price: number;
  bedrooms: number;
  distance: number;
  interestAmount: number;
}
const houseUnits: HouseUnit[] = [
  {
    name: "2340 Portland St House",
    description:
      "Here, you'll settle into life quickly and thrive in the support of a tight-knit military community with access to everything you will love about California living.",
    imageUrl:
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/1632566/DSC01977_8_9(20221114151546233).jpg?width=850&quality=80",
    price: 400,
    bedrooms: 2,
    distance: 5,
    interestAmount: 12,
  },
  {
    name: "8303 d Maumee Rd",
    description:
      "At Adobe Flats V, your new Twentynine Palms, California, home offers all the convenient access to Marine Corps Air Ground Combat Center Twentynine Palms you desire while setting you and your military family up for success.",
    imageUrl:
      "https://image1.apartmentfinder.com/i2/je6HWit-Kq50zY5k4nPvsVqqZdwHYOODhxZ8uX8MtPk/116/linea-los-angeles-ca-primary-photo.jpg",
    price: 750,
    bedrooms: 3,
    distance: 1,
    interestAmount: 51,
  },
  {
    name: "4000 Falcon St",
    description:
      "Offering great value, our spacious homes include features that make it easy to enjoy the smaller moments of life.",
    imageUrl:
      "https://image1.apartmentfinder.com/i2/zMv-cjxxWM7Tc7mQGkE1TdCXGJBJNNArsHz7Gs80rW8/116/kinley-west-la-los-angeles-ca-primary-photo.jpg",
    price: 250,
    bedrooms: 2,
    distance: 7,
    interestAmount: 8,
  },
  {
    name: "705 W 9th St",
    description:
      "Opportunity stretches as far as the eye can see, from each floor to ceiling window with panoramic city views. Spin in the club level fitness center, find zen in the serenity garden and enjoy the skyline views from the infinity pool, there are endless chances to seize the day.",
    imageUrl:
      "https://image1.apartmentfinder.com/i2/_nd1MY2xUUbozipBsTZCgqvn2cexcsbbFjj7eLZZHqU/116/el-centro-apartments-and-bungalows-los-angeles-ca-primary-photo.jpg",
    price: 430,
    bedrooms: 4,
    distance: 3,
    interestAmount: 18,
  },
  {
    name: "Kinley West",
    description:
      "A lifestyle addressed to you. Kinley West LA is Southern California's new distinguished address, representing the pinnacle of upscale living and modern-day amenities.",
    imageUrl:
      "https://image1.apartmentfinder.com/i2/MdqjzA9yH5SHriN6E9T5oCWZniQ0Q9n251pC8MrrZGw/116/ava-arts-district-los-angeles-ca-co-work-lounge-rendering.jpg",
    price: 270,
    bedrooms: 2,
    distance: 6,
    interestAmount: 13,
  },
];

async function main() {
  console.log(`Start seeding ... 🌱🌱🌱`);
  for (const u of houseUnits) {
    await prisma.houseUnit.create({
      data: u,
    });
  }
  console.log(`Seeding finished! ✅🌱`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
