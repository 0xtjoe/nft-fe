import { useAddress, useNetworkMismatch } from "@thirdweb-dev/react";

import { ListItem } from "../list/ListItem";
import { NftDetail } from "../../utils/types";

type Props = {
  openTab: number;
  selTab: number;
  loading: boolean;
  nftList: NftDetail[];
};

export const ListPanel = ({ openTab, selTab, loading, nftList }: Props) => {
  const address = useAddress();
  const isMismatched = useNetworkMismatch();

  return (
    <div className={(openTab === selTab ? "block" : "hidden") + " text-center"}>
      {loading ? (
        <></>
      ) : selTab == 2 && (address == undefined || isMismatched) ? (
        <span className="inline-flex justify-center rounded-md bg-red-50 px-10 py-2 text-sm font-medium text-red-700 mt-5">
          Please connect wallet
        </span>
      ) : nftList.length == 0 ? (
        <span className="inline-flex justify-center rounded-md bg-red-50 px-10 py-2 text-sm font-medium text-red-700 mt-5">
          {selTab == 2 ? "You do not have any NFT" : "No minted NFT yet"}
        </span>
      ) : (
        <></>
      )}

      <div className="grid grid-cols-4 gap-4 content-stretch">
        {nftList.map((nftItem: NftDetail, ind: number) => (
          <ListItem key={ind} nftItem={nftItem} />
        ))}
      </div>
    </div>
  );
};
