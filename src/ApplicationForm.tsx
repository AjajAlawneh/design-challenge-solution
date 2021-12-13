import React from "react";
import styles from "./ApplicationForm.module.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "./images/logo.png";
import PhoneInput from 'react-phone-input-2'



interface Props { }


export const ApplicationForm = (props: Props) => (
  <div className={styles.pageContainer}>
    <div className={styles.pageHeader}>
      <img src={logo} className={styles.logo} />
    </div>
    <div className={styles.pageBackground}>
      <div className={styles.formContainer}>
        <div className={styles.formHeaderContainter}>
          <h2 className={styles.formHeader}>UI/UX Designer (m/ f/ d)</h2>
          <div className={styles.stepperContainer}>
            <span className={styles.complatedStep}></span>
            <span className={styles.stepsSeperator}></span>
            <span className={styles.step}></span>
            <span className={styles.stepsSeperator}></span>
            <span className={styles.step}></span>
            <span className={styles.stepsSeperator}></span>
            <span className={styles.step}></span>
          </div>
          <div className={styles.stepperContainer2}>
            <span className={styles.step1} style={{fontWeight:700,fontSize:14}}>My information</span>
            <span className={styles.step2} style={{fontSize:12}}>My Experience</span>
            <span className={styles.step3} style={{fontSize:12}}>Application Questions</span>
            <span style={{fontSize:12}}>Review</span>
          </div>
        </div>

        {/* form Step */}
        <div>
          <h1 className={styles.stepHeader} style={{fontWeight:900}}>My information</h1>
          <div className={styles.inputContainer}>
            <p className={styles.inputLabel2}>
                <span className={styles.redColor}>*</span> Indicates a required field
            </p>
            <p className={styles.inputLabel}>
              Country <span className={styles.redColor}>*</span>
            </p>
            <FormControl fullWidth>
              
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label=""
                value="Germany"
              >
                
                <MenuItem value="Germany">Germany</MenuItem>
                <MenuItem>Italy</MenuItem>
                <MenuItem>Spain</MenuItem>
              </Select>
            </FormControl>
          </div>

          <hr style={{color: "#979797"}} className="w-100" />

          <div className={styles.inputContainer}>
            <p className={styles.inputsHeader}>Legal Name</p>
            <p className={styles.inputLabel}>Title</p>
            <FormControl className="mb-4" fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select a title
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="select a title"
              >
                <MenuItem>Mr</MenuItem>
                <MenuItem>Ms</MenuItem>
                <MenuItem>Others</MenuItem>
              </Select>
            </FormControl>
            <p className={styles.inputLabel}>
              First Name <span className={styles.redColor}>*</span>
            </p>
            <TextField
              fullWidth
              id="outlined-name"
              label=" "
              className="mb-4"
            />
            <p className={styles.inputLabel}>
              Last Name <span className={styles.redColor}>*</span>
            </p>
            <TextField fullWidth id="outlined-name" label=" " />
          </div>

          <hr style={{color: "#979797"}} className="w-100" />

          <div className={styles.inputContainer}>
            <p className={styles.inputsHeader}>Gender</p>
            <p className={styles.inputLabel}>
              Gender <span className={styles.redColor}>*</span>
            </p>
            <FormControl className="mb-4" fullWidth>
              <InputLabel id="demo-simple-select-label"> </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label=" "
              >
                <MenuItem>Male</MenuItem>
                <MenuItem>Female</MenuItem>
                <MenuItem>Others</MenuItem>
                <MenuItem>Prefer not to say</MenuItem>
              </Select>
            </FormControl>
          </div>

          <hr style={{color: "#979797"}} className="w-100 mt-5 mb-0" />

          <div className={styles.inputContainer}>
            <p className={styles.inputsHeader}>Email</p>
            <p className={styles.inputLabel}>
              Email <span className={styles.redColor}>*</span>
            </p>
            <TextField
              fullWidth
              id="outlined-name"
              label=" "
              className="mb-4"
            />
          </div>

          <hr style={{color: "#979797"}} className="w-100" />

          <div className={styles.inputContainer}>
            <p className={styles.inputsHeader}>Phone</p>
            <p className={styles.inputLabel}>Phone Number</p>
           
            <PhoneInput
              country={'de'}
            />
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <Button className={styles.nextButton} variant="contained">
            <span className={styles.nextButtonText}>
              Next
            </span>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
