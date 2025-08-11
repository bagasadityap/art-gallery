import { NextRequest, NextResponse } from "next/server";
import { countNFTsByAccount } from "@/server/xrpl/owner_nft";

export async function middleware(request: NextRequest) {
  const walletAddress = request.cookies.get("token")?.value;

  const publicPaths = ["/login", "/not-authorized", "/api/public"];
  if (publicPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (!walletAddress) {
    return new NextResponse("Forbidden: No token provided", { status: 403 });
  }

  const nftCount = await countNFTsByAccount(walletAddress);

  if (nftCount > 0) {
    return NextResponse.next();
  } else {
    return new NextResponse("Forbidden: NFT count is zero", { status: 403 });
  }
}

export const config = {
  matcher: ['/:path*'],
};
