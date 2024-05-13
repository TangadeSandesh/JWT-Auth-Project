import React from 'react'

function Home() {
  const [auth, setAuth]=useState(false);

  useEffect(() => {
    axios.get('/')
    .then(res=>{
      if(res.data.Status==="Success")
        {
          setAuth(true)
          navigate('/login');
        }
        else{
          setAuth(false)
        }
    })
    .then(err =>console.log(err));
  })

   return (
    <div>
      Home
    </div>
  )
}

export default Home
