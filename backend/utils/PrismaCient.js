//This is use to avoid many initializations
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
