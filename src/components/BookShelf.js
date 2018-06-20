import React, { Component } from 'react'
import Shelf from './Shelf'

class BookShelf extends Component {
  state ={
    //an array that holds a shelf
    books:[ ]
  }

  render(){
      let currentList = [
        {
          "title": "Enders Game",
          "authors": "Scott Card",
          "imageLinks" : "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
        },
      {
        "title":"To Kill a Mockingbird",
        "authors":"Harper Lee",
        "imageLinks" :"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
      }
      ];
      let wantList = [
        {
          "title":"1776",
          "authors":"David McCullough",
          "imageLinks" :"http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
          },
          {
          "title":"Harry Potter and the Sorcerers Stone" ,
          "authors":".K. Rowling" ,
          "imageLinks" : "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
        }

      ];
      let readList = [
        {
          "title":"The Hobbit",
          "authors":"J.R.R. Tolkien",
          "imageLinks" :"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
          },
          {
            "title":"Oh, the Places Youll Go!",
            "authors":"Seuss",
            "imageLinks" : "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
          }

      ];

      const shelfList = [
    {
        name: 'Currently Reading',
        books : currentList
    },
    {
        name: 'Want To Read',
        books : wantList
    },
    {
        name: 'Read',
        books : readList
    }
]
//rendering EACH SHELF with specific books from shelf.js
      return (
      <div className="list-books-content">
        <div>
        { shelfList.map((shelf,index) =>( <Shelf key={index} title={shelf.name} books = {shelf.books} />))}
        </div>
      </div>

    )
  }
}
export default BookShelf
