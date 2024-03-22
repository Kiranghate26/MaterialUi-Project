import React from 'react';
import {
    Grid
} from 'material-ui';

import {
    RegularCard, Table, ItemGrid
} from 'components';

class TableList extends React.Component{
    render(){
        return (
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="User Data"
                        cardSubtitle="Some More details related Data"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Name','Country','City','Salary']}
                                tableData={[
                                    ["kiran ghate" ,"sangavi", "pune", "36,738" ] ,
                                    ["ajinky sable" ,"aundh", "pune", "23,789"  ] ,
                                    ["sanket sable" , "kothrud", "pune" , "56,142" ] ,
                                    ["vaibhavi deshmukh", "pune"  , "38,735" ,"nigadi"] ,
                                    ["gauri deshpande"  , "Malawi" , "sangali", "63,542" ] ,
                                    ["Mason ghate" , "Chile" , "Akola" , "78,615" ]
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        plainCard
                        cardTitle="Joining Process Data"
                        cardSubtitle="Essential Information"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['ID','Name','Country','City','Salary']}
                                tableData={[
                                    [ '1' , "kiran ghate" , "36,738" ,"sangavi", "pune"] ,
                                    [ '2' , "ajinky sable" , "23,789" ,"aundh", "pune" ] ,
                                    [ '3' , "sanket sable" , "56,142" , "kothrud", "pune" ] ,
                                    [ '4' , "vaibhavi deshmukh" , "38,735" ,"nigadi", "pune" ] ,
                                    [ "5" , "gauri deshpande" , "63,542" , "Malawi" , "sangali" ] ,
                                    [ "6" , "Mason ghate" , "78,615" , "Chile" , "Akola" ]
                                ]}
                            />
                        }
                    />
                </ItemGrid>
            </Grid>
        );
    }
}

export default TableList;
