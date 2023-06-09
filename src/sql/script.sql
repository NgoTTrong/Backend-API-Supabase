Create Table Products(
     id SERIAL Primary Key,
     name varchar(255) NOT NULL,
     description varchar(255),
     thumbnailUrl varchar(255),
     basePrice int NOT NULL,
     discountPrice int
);

Create Table Orders(
     id SERIAL Primary Key,
     productId int,
     buyerName varchar(255) NOT NULL,
     quantity int Not Null,
     totalpaid int Not Null,  
     boughtAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     phoneNumber varchar(255) NOT NULL,
     email varchar(255) NOT NULL,
     buyerAddress varchar(255) NOT NULL,
     FOREIGN KEY (productId) REFERENCES Products(id) ON DELETE SET NULL
);
