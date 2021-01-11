const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  it("Should set the value of data variable in smart contract", async () => {
    const simpleStorage = await SimpleStorage.deployed();
    await simpleStorage.set(4);
    const result = simpleStorage.get();
    assert(result, 4);
  });
});
