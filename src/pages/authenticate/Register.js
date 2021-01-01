import styles from "./Register.module.css"
import Link from "next/link"
import Image from 'next/image'

export default function Register() {
  return (
    <div className={styles.Register_App}>
        <div className="container shadow-lg p-3 mb-5 rounded" className={styles.main_part}>
		<div className="row d-flex justify-content-center">
			<div className="col-1 col-md-1 col-sm-1"></div>	
			<div className="col-10 col-md-8 col-sm-8">
					<div className="d-flex justify-content-center">
						<Image src="/profile.svg" alt="avatar" className={styles.img2}  width="100" height="100"/>
					</div>
					<br />
					<div className="d-flex justify-content-center">
						<h1 className="p-1 bd-highlight">WELCOME</h1>
					</div>
					<div className="d-flex justify-content-center">
						<strong className="p-2 bd-highlight" style={{"margin-top": "-15px"}}>Add your details</strong>
					</div>
					<br />
					<div>
						<form action="/register-done" method="POST">
							<div className="row">
								<div className="col-md-6 col-sm-6 col-6">
									<div className="form-group">
										<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="fullname" />
									  </div>
									   <div className="form-group">
										<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ID" name="id" />
									  </div>
									  <div className="form-group">
										<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile number" name="mobile" />
									  </div>
								</div>
								<div className="col-md-6 col-sm-6 col-6">
									<div className="form-group">
										<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="username" />
									  </div>
									  <div class="form-group">
										<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password_1" />
									  </div>
									  <div class="form-group">
										<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name="password_2" />
									  </div>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<button type="submit" className="btn btn-primary" value="Signup">Signup</button>
							</div>
							<br />
						  <small>Already having an Account <Link href="/authenticate/LogIn">LogIn</Link></small>						
						</form>
					</div>
			</div>
			<div className="col-1 col-md-1 col-sm-1"></div>
		</div>
	</div>
    </div>
  );
}
