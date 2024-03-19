// C:\my-projects\BLOGAPP\src\utils\connect.js
import prisma from   "../../../utils/connect.js";
import {NextResponse} from "next/server.js"

export const GET = async () => {

    try{
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories, { status: 200}));
    }catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({message: "something went wrong!"}, { status: 500}));
    };

}