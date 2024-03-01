import express from 'express';
import { PrismaClient, kunta } from '@prisma/client'; // Add import statement for 'kunta' model
import 'dotenv/config'

const app: express.Application = express();

const prisma: PrismaClient = new PrismaClient();



const port: number = Number(process.env.PORT) || 3001;

app.set("view engine", "ejs");
//Juurihakemisto
app.get("/", (_req: express.Request, res: express.Response) => {

    async function main() {
        const kunnat = await prisma.kunta.findMany(); // Modify query to include 'kunta' model
        res.render("index", { kunnat });
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
});
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Haetaan kuntia hakusanan perusteella
app.post("/", async (_req: express.Request, res: express.Response) => {
    const hakusana = _req.body.haku;
    //console.log(hakusana);
    async function main() {
        const kunnat = await prisma.kunta.findMany({where:{kunta:{startsWith: hakusana } } }); 
        res.render("index", { kunnat });
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
});

app.listen(port, () => {

    console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);

});