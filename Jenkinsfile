pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            args '-u root:root'
        }
    }
    stages {
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
        stage("Lint"){
            steps{
                echo "====++++executing Lint++++===="
                sh 'npm run lint'
            }
            post {
                success{
                    echo "====++++Lint executed succesfully++++===="
                }
                failure{
                    echo "====++++Lint execution failed++++===="
                }
            }
        }
        stage("Test"){
            steps{
                sh 'npm run test'
                sh 'npm run test:es5'
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
            // # when{ branch 'master'}
            withCredentials{
                [string(
                    credentialsId: 'npm',
                    variable: 'NPM_TOKEN')
                ]
            }
            steps{
                echo "====++++executing Publishing to NPM Repository++++===="
                sh "npm login"
                sh "echo $NPM_TOKEN"
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
