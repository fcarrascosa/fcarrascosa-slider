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
                    echo "====++++Install Dependencies executed successfully++++===="
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
            parallel{
                stage("ES6 Unit Test"){
                    steps{
                        echo "====++++executing ES6 Unit Test++++===="
                        sh "npm run test"
                    }
                    post{
                        success{
                            echo "====++++ES6 Unit Test executed successfully++++===="
                        }
                        failure{
                            echo"====++++ES6 Unit Test execution failed++++===="
                        }
                    }
                }
                stage("ES5 Unit Test"){
                    steps{
                        echo "====++++executing ES5 Unit Test++++===="
                        sh 'npm run test:es5'
                    }
                    post{
                        success{
                            echo "====++++ES5 Unit Test executed successfully++++===="
                        }
                        failure{
                            echo"====++++ES5 Unit Test execution failed++++===="
                        }
                    }
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
                    echo "====++++Building Application executed successfully++++===="
                }
                failure{
                    echo "====++++Building Application execution failed++++===="
                }
            }
        }
        stage("Publishing to NPM Repository"){
            environment {
                NPM_TOKEN = credentials("npm")
            }
            steps {
                echo "npm token is $NPM_TOKEN"
                sh "echo npm token is $NPM_TOKEN"
                sh "echo $NPM_TOKEN > test.txt"
                sh "echo 123 >> test.txt"
                sh "cat test.txt"
            }
            post{
                success{
                    echo "====++++Publishing to NPM Repository executed successfully++++===="
                }
                failure{
                    echo "====++++Publishing to NPM Repository execution failed++++===="
                }
            }
        }
    }
}