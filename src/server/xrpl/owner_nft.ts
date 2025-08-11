import { Client } from "xrpl";

export async function countNFTsByAccount(account: string): Promise<number> {
  const client = new Client("wss://s2.ripple.com/");
  await client.connect();

  let count = 0;
  let marker: string | undefined;

  const issuer = "rM7SKst3xLZNpPmw8LfWtQNBVdRJ2DeFLD";

  do {
    const response = await client.request({
      command: "account_nfts",
      account,
      marker,
    });

    const nfts = response.result.account_nfts || [];

    for (const nft of nfts) {
      if (nft.Issuer === issuer) {
        count++;
      }
    }

    marker = response.result.marker as string | undefined;
  } while (marker);

  await client.disconnect();
  return count;
}
