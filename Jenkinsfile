pipeline {
    agent {
        docker {
            image 'node:lts-stretch'
        }
    }
    environment {
        HOME = '.'
        CHROME_BIN = '/usr/bin/chromium-browser'
    }
    stages {
        stage("Install Chromium Headless") {
            steps{
                echo "====++++executing Install Chromium Headless++++===="
                echo "Downloading Chrome..."
                sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb'
                echo "Installing google chrome"
                sh 'pwd'
                sh 'dpkg -i google-chrome-stable_current_amd64.deb'
                sh 'echo $CHROME_BIN'
                sh 'which google-chrome'
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
