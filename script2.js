const wallet = document.getElementById("connect-wallet-button");

wallet.addEventListener("click", async function () {
    console.log("trying to connect");
    // Check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access if needed
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        // Get the selected account
        const account = accounts[0];
        console.log("Connected account:", account);

        // Redirect to another page after successful connection
        window.location.href = "./heresectionconnectwallet.html"; // Replace with your target URL
      } catch (error) {
        console.error("User rejected the request:", error);
      }
    } else {
      alert(
        "MetaMask is not installed. Please install it to use this feature."
      );
    }
  });
