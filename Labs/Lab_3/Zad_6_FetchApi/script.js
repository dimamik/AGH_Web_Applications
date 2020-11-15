const getData = () =>
    {
        return fetch(`http://localhost:3000/Persons`)
                .then( res => {
                    res.json().headers.get('name')
                        .map(
                            name => name + toString(length(name))
                        )
                    console.log(res.json);
                    
                });
    }

