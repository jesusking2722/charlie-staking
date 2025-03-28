import { http } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  trustWallet,
  bitgetWallet,
  okxWallet,
} from "@rainbow-me/rainbowkit/wallets";

const projectId = "bb9ebb9fe72358fa4b2d4a79878e1c51";

const wagmiConfig = getDefaultConfig({
  appName: "Staking | Charlie Unicorn AI",
  projectId,
  wallets: [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, trustWallet, bitgetWallet, okxWallet],
    },
  ],
  chains: [bscTestnet],
  transports: {
    [bscTestnet.id]: http("https://rpc.ankr.com/bsc_testnet_chapel/1b49ccfb464d3a36778d62cd26f29d2da87e099d5ed6229c15bc1627cee80453");
  },
  ssr: true,
});

export default wagmiConfig;
