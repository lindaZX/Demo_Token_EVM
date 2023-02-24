// SPDX-License-Identifier: MIT
const MyERC721 = artifacts.require("MyERC721");

contract("MyERC721", accounts => {
    let myERC721;

    before(async () => {
        myERC721 = await MyERC721.new();
    });

    it("should have the correct name and symbol", async () => {
        const name = await myERC721.name();
        const symbol = await myERC721.symbol();

        assert.equal(name, "MyERC7210", "Token name is incorrect");
        assert.equal(symbol, "MTK", "Token symbol is incorrect");
    });

    it("should be able to mint tokens", async () => {
        const tokenId = 1;
        await myERC721.safeMint(accounts[1], tokenId);

        const owner = await myERC721.ownerOf(tokenId);
        assert.equal(owner, accounts[1], "Token was not minted correctly");
    });

    it("should be able to burn tokens", async () => {
        const tokenId = 1;
        await myERC721.burn(tokenId);

        const balance = await myERC721.balanceOf(accounts[1]);
        assert.equal(balance, 0, "Token was not burned correctly");
    });

    // Add more test cases here
});
