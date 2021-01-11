pragma solidity ^0.5.0;

contract SimpleStorage {
    uint256 data;

    // Transaction function
    function set(uint256 _data) public {
        data = _data;
    }

    // Call function
    function get() public view returns (uint256) {
        return data;
    }
}
