pipeline {
    agent {
        docker {
            image 'node:lts-stretch'
            args '-u root:root'
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage("Install Chromium Headless") {
            steps{
                echo "====++++executing Install Chromium Headless++++===="
                echo "Installing google chrome"
                sh 'apt-get update'
                sh 'pwd'
                sh 'apt-get install chromium'
                sh 'echo $CHROME_BIN'
                sh 'which chromium'
            }
            post{
                success{
                    echo "====++++Install Chromium Headless executed succesfully++++===="
                }
                failure{
                    echo "====++++Install Chromium Headless execution failed++++===="
                }
        
            }
        }
        stage("Install Dependencies"){
            steps{
                echo "====++++executing Install Dependencies++++===="
                sh "npm install"
            }
            post{
                success{
                    echo "====++++Install Dependencies executed succesfully++++===="
                }
                failure{
                    echo "====++++Install Dependencies execution failed++++===="
                }
        
            }
        }
        stage("Test"){
            steps{
                sh 'npm run test'
                sh 'npm run test:es'
            }
            post{
                success{
                    echo "====++++Test executed succesfully++++===="
                }
                failure{
                    echo "====++++Test execution failed++++===="
                }
        
            }
        }
        stage("Building Application"){
            steps{
                echo "====++++executing Building Application++++===="
                sh "npm run build"
            }
            post{
                success{
                    echo "====++++Building Application executed succesfully++++===="
                }
                failure{
                    echo "====++++Building Application execution failed++++===="
                }
        
            }
        }
        stage("Publishing to NPM Repository"){
            steps{
                echo "====++++executing Publishing to NPM Repository++++===="
            }
            post{
                success{
                    echo "====++++Publishing to NPM Repository executed succesfully++++===="
                }
                failure{
                    echo "====++++Publishing to NPM Repository execution failed++++===="
                }
        
            }
        }
    }
}
