# TechnicalAssessment



## Setup Locally

Do the following on your terminal -

**1. Clone this repo**

    cd ~/git && git clone git@ghe.coxautoinc.com:DDC-WebPlatform/web-ui-suite.git

**2. Go to technicalAssessment**

    cd technicalAssessment

**3. make sure you are using node 18.16.1**

    nvm i && nvm use
    node -v
    (only if needed) nvm install 18.16.1

**4. Install npm dependencies**

    npm i

---

## Running Tests

#### 1. Run on Cypress Test Runner - Headed mode

    cd ~/git/technicalAssessment
    npm run open

_Then select the spec you would like to run.

#### 1. Run on terminal - Headless mode

    cd ~/git/technicalAssessment
    npm run test

report with test results will be dsiplayed in terminal
