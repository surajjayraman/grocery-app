import React from "react";

const ProductTableHeader = () => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            <th colSpan="2">
                                Name
                            </th>
                        </td>
                        <td>
                            <th colSpan="2">
                                Price
                            </th>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    );

}

export default ProductTableHeader;