class Tables {
    init(connection) {
        this.connection = connection;

        this.createUsers();
    }

    createUsers() {
        const sql = ` 
      CREATE TABLE IF NOT EXISTS Users (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(70) NOT NULL,
      cpf varchar(11) NOT NULL,
      birthDate DATE NOT NULL,
      email varchar(40) NOT NULL,
      password varchar(30) NOT NULL,
      address varchar(40) NOT NULL,
      number varchar(5) NOT NULL,
      complement varchar(70) NOT NULL,
      city varchar(50) NOT NULL,
      state varchar(2) NOT NULL,
      country varchar(30) NOT NULL,
      zipCode varchar(8) NOT NULL,
      PRIMARY KEY (id))
      `;

        this.connection.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('USERS Table was created successfully!');
            }
        });
    }
}

module.exports = new Tables();
