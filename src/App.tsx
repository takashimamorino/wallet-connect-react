import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";

const handleClick = async () => {
	const wcProvider = new WalletConnectProvider({
		infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
		qrcodeModalOptions: {
			mobileLinks: ["metamask"],
			desktopLinks: ["metamask"],
		},
	});
	await wcProvider.enable();
	const provider = new providers.Web3Provider(wcProvider);
	const signer = provider.getSigner();
	console.log({ signer });
};

function App() {
	return (
		<>
			<button onClick={handleClick}>Connect</button>
		</>
	);
}

export default App;
