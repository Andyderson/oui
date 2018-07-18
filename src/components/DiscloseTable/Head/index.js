import React from 'react';
import Table from '../../Table';

const DiscloseHead = ({
    headerStyle,
    headerContents
}) => {
    console.log(headerContents);
    return(
        <Table tableLayoutAlgorithm="auto">
            <Table.THead>
                { headerContents }
            </Table.THead>
        </Table>
    );
}

export default DiscloseHead;