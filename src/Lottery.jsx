import { useState } from "react"
import './Lottery.css'
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
import Iswin from "./isWinning";
import Button from "./button";


export default function Lottery({n, winno})
{
    let [ticket, setTicket] = useState(() => {
      return genTicket(n);
    });
   let genTicket1 = ()=>
    {
        setTicket(genTicket(n))
    }
    // let isWinning = (sum(ticket)==WinningSum)? true : false;
    let isWinning1 = Iswin(ticket,winno);
    
    return (
      <>
        <h1>Lottery Game!!</h1> 
        <div>
         <Ticket ticket={ticket} />
     <Button action={genTicket1}/>
        </div>
        <br />
        <h2>{isWinning1 && "Congrats You Won!!"}</h2>
      </>
    );
}