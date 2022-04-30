class Tables {
    init(connection) {
        this.connection = connection;

        this.createPersons();
    }

    createPersons() {
        const sql = ` 
      CREATE TABLE IF NOT EXISTS Persons (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(70) NOT NULL,
      cpf varchar(11) NOT NULL,
      birthDate DATE NOT NULL,
      email varchar(40) NOT NULL,
      password varchar(30) NOT NULL,
      address varchar(100) NOT NULL,
      number varchar(6) NOT NULL,
      complement varchar(70) NOT NULL,
      city varchar(50) NOT NULL,
      state varchar(50) NOT NULL,
      country varchar(50) NOT NULL,
      zipCode varchar(8) NOT NULL,
      PRIMARY KEY (id))
      `;

        this.connection.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('PERSONS Table was created successfully!');
            }
        });
    }
}

module.exports = new Tables();
