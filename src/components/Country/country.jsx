
const Country = ({country}) => {
    console.log(country);
    const {name} = country;
    return (
        <div>
            <h3>Name: {name?.common}</h3>
        </div>
    );
};

export default Country;