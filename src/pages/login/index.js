import {useState} from 'react'



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const api = useApi ()
  
  const onLoginBtnClick = () => {
alert(` ${email} ve ${password}`)
api.post(
  .then(() => {
    
  })
)
  }

  return (
    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col-6 align-self-center">
          <div className="card  mb-4 rounded-3 shadow-sm border-primary">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                E-mail address
              </label>
              <input
                type="email"
                class="form-control"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div class="d-grid gap-2">
                <button class="btn btn-primary" 
                type="button"
                onClick={onLoginBtnClick}>
                 LOGIN
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table text-center">
          <thead></thead>
        </table>
      </div>
    </main>
  );
};

export default Login;
