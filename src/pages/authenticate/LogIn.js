import styles from "./LogIn.module.css"
import Link from "next/link"
import Image from 'next/image'

export default function Login() {
  return (
    <div className={styles.Login_App}>
        <div className="container shadow-lg p-3 mb-5 rounded" className={styles.main_part}>
		<div className="row d-flex justify-content-center">
			<div className="col-1 col-md-1 col-sm-1"></div>	
			<div className="col-10 col-md-10 col-sm-10" style={{"width":"100%;"}}>
					<div className="d-flex justify-content-center">
						<Image src="/profile.svg" alt="avatar" className={styles.img2}  width="100" height="100"/>
					</div>
					<br />
					<div className="d-flex justify-content-center">
						<h1 className="p-1 bd-highlight">WELCOME</h1>
					</div>
					<div className="d-flex justify-content-center">
						<strong className="p-2 bd-highlight" style={{"margin-top": "-15px;"}}>Add your details</strong>
					</div>
					<br />
					<div>
                        <form action="/login-done" method="POST" name="myform">
							<div className="form-group">
								<input type="text" className="form-control" name="username" aria-describedby="emailHelp" placeholder="Enter Id" />
							</div>
							  <div className="form-group">
								<input type="password" className="form-control" id="password" name="password" placeholder="Password" />
							  </div>	
							  <button type="submit" className="btn btn-primary" value="submit" onclick="validate()">Login</button>
							<br /><br />
						  <small>Don't have an Account <Link href="/authenticate/Register">Signup</Link></small>
						</form>
					</div>
			</div>
			<div class="col-1 col-md-1 col-sm-1"></div>
		</div>
	</div>
    </div>
  );
}
