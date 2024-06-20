
## How to Use


2. **Navigate to the Project Directory**:
    ```bash
    cd sample-ton-jetton-contract
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Build the Contract**:
    ```bash
    npx blueprint build
    ```

5. **Customize the Deploy Script**:
    - Open the `deploy.js` file.
    - Update the `name`, `description`, `symbol`, and `image` variables with your desired values.

6. **Deploy the Contract**:
    ```bash
    npx blueprint run

### Ton Jetton Contract

The Ton Jetton contract is based on the TEP-74 standard and includes the following features:

- **Minting**: Allows the owner to mint new tokens up to the maximum supply.
- **Burning**: Enables token holders to burn their tokens, reducing the total supply.
- **Transferring**: Supports transferring tokens between addresses.
- **Metadata**: Stores metadata such as name, description, symbol, and image URL.
