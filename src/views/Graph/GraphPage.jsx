import React, { useEffect, useState } from 'react';
import {
  withStyles, Grid
} from 'material-ui';

import {
   Store , DateRange
} from 'material-ui-icons';

import { RegularCard, Table, ItemGrid, StatsCard } from 'components';
import BarChart from '../../components/Graph/BarChart';
import * as XLSX from "xlsx";
import PieChart from '../../components/Graph/PieChart';
import DonutChart from '../../components/Graph/DonutChart';

const GraphPage = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  const [receivablesData, setReceivablesData] = useState([]);
  const [totalAmountData, setTotalAmountData] = useState([]);
    const [totalBalanceAmountData, setTotalBalanceAmountData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3, response4] = await Promise.all([
          fetch('http://localhost:5000/api/total_ar_to_customer'),
          fetch('http://localhost:5000/api/projected_receivables'),
          fetch('http://localhost:5000/api/total_invoice_amount'),
          fetch('http://localhost:5000/api/total_balance_amount'),
        ]);

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const data4 = await response4.json();

        setInvoiceData(data1);
        setReceivablesData(data2);
        setTotalAmountData(data3);
        setTotalBalanceAmountData(data4);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(()=>{
    console.log("ID:-" ,totalAmountData);
  },[totalAmountData])
  

  function formatNumber(num) {
    if (num < 1000000 && num != null) {
      return num.toString();
    } else if (num < 1000000000) {
      return (num / 1000000).toFixed(1) + ' M';
    } else {
      return (num / 1000000000).toFixed(1) + ' B';
    }
  }
  

  const numericalValueForTotalInvoice = totalAmountData.length > 0 ? totalAmountData[0].total_invoice_amount : null;
  const numericalValueForTotalBalanceInvoice = totalBalanceAmountData.length > 0 ? totalBalanceAmountData[0].sum : null;
  const numericalValueForTotalAmountrecieved = numericalValueForTotalInvoice - numericalValueForTotalBalanceInvoice
  return (
    <div>

<Grid container>
  {/* First Card */}
  <ItemGrid xs={12} sm={4} md={4}>
    <RegularCard
      headerColor="green"
      cardTitle="Total Amount"
      // cardSubtitle="Employees Details"
      content={formatNumber(numericalValueForTotalInvoice)}
    />
  </ItemGrid>

  {/* Second Card */}
  <ItemGrid xs={12} sm={4} md={4}>
    <RegularCard
      headerColor="blue"
      cardTitle="Amount Received"
      // cardSubtitle="Employees Details"
      content={formatNumber(numericalValueForTotalBalanceInvoice)}
    />
  </ItemGrid>

  {/* Third Card */}
  <ItemGrid xs={12} sm={4} md={4}>
    <RegularCard
      headerColor="red"
      cardTitle="Outstanding Receivables"
      // cardSubtitle="Employees Details"
      content={formatNumber(numericalValueForTotalAmountrecieved)}
    />
  </ItemGrid>
</Grid>


{/* 
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="blue"
            cardTitle="Total Amount"
            cardSubtitle="Employees Details"
            content={formatNumber(numericalValueForTotalInvoice)}
          />
        </ItemGrid> 
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="blue"
            cardTitle="Amount Recieved"
            cardSubtitle="Employees Details"
            content={formatNumber(numericalValueForTotalBalanceInvoice)}
          />
        </ItemGrid> 
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            headerColor="blue"
            cardTitle="Outstanding Recievables"
            cardSubtitle="Employees Details"
            content={formatNumber(numericalValueForTotalAmountrecieved)}
          />
        </ItemGrid> 
      </Grid> */}


      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
            
          <RegularCard
            headerColor="blue"
            cardTitle="Bar graph"
            cardSubtitle="Employees Details"
            content={
              <BarChart
               data={invoiceData}
                nameProp="customer_name"
                 amountProp="total_invoice_amount_total_usd"
                  chartId="invoiceChart"
                  label="Total Amount"
                  xlable="Bill to customer name"/>
            }
          />
        </ItemGrid> 
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
            
          <RegularCard
            headerColor="blue"
            cardTitle="Bar graph"
            cardSubtitle="Employees Details"
            content={
              // <PieChart/>
              <BarChart
               data={receivablesData}
                nameProp="monthyear" 
                amountProp="monthlysum"
                 chartId="receivablesChart"
                 label="Amount"
                 xlable="Due Date"/>
            }
          />
        </ItemGrid>
      

      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
            
          <RegularCard
            headerColor="blue"
            cardTitle="Bar graph"
            cardSubtitle="Employees Details"
            content={
              <DonutChart/>
            }
          />
        </ItemGrid>      
      </Grid>
    </div>
  );
};

export default GraphPage;
