
import prisma from   "../../../utils/connect.js";
import {NextResponse} from "next/server"

export const GET = async (req) => {

    console.log(req.url);

    const {searchParams} = new URL(req.url);

    const page = searchParams.get("page");

    const POST_PER_PAGE = 2;

    try{
        const post = await prisma.post.findMany({
            
            take:POST_PER_PAGE,
            skip:POST_PER_PAGE * (page-1),
            
        });
        return new NextResponse(JSON.stringify(post, { status: 200}));
    }catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({message: "something went wrong!"}, { status: 500}));
    };

}