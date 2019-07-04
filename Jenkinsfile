pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            args '-u root:root'
            customWorkspace 'app/build'
        }
    }
    stages {
        stage("Install Dependencies") {
            steps {
                echo "====++++executing Install Dependencies++++===="
                sh "npm install"
            }
            post {
                success {
                    echo "====++++Install Dependencies executed successfully++++===="
                }
                failure {
                    echo "====++++Install Dependencies execution failed++++===="
                }
            }
        }
        stage("Lint") {
            steps {
                echo "====++++executing Lint++++===="
                sh 'npm run lint'
            }
            post {
                success {
                    echo "====++++Lint executed succesfully++++===="
                }
                failure {
                    echo "====++++Lint execution failed++++===="
                }
            }
        }
        stage("Test") {
            parallel {
                stage("ES6 Unit Test") {
                    steps {
                        echo "====++++executing ES6 Unit Test++++===="
                        sh "npm run test"
                    }
                    post {
                        success {
                            echo "====++++ES6 Unit Test executed successfully++++===="
                        }
                        failure {
                            echo"====++++ES6 Unit Test execution failed++++===="
                        }
                    }
                }
                stage("ES5 Unit Test") {
                    steps {
                        echo "====++++executing ES5 Unit Test++++===="
                        sh 'npm run test:es5'
                    }
                    post {
                        success {
                            echo "====++++ES5 Unit Test executed successfully++++===="
                        }
                        failure {
                            echo"====++++ES5 Unit Test execution failed++++===="
                        }
                    }
                }
            }
        }
        stage("Building Application") {
            steps {
                echo "====++++executing Building Application++++===="
                sh "npm run build"
            }
            post {
                success {
                    echo "====++++Building Application executed successfully++++===="
                }
                failure {
                    echo "====++++Building Application execution failed++++===="
                }
            }
        }
        stage("Releasing New Version to GitHub") {
            when {
                branch 'master'
                not { buildingTag() }
            }
            steps {
                echo "====++++executing Releasing New Version to GitHub++++===="
                sh "git config user.name ${scmvars.GIT_AUTHOR_NAME}"
                sh "git config user.email ${scmvars.GIT_AUTHOR_EMAIL}"
                sh "npm info . version"
                sh "git config -l"
            }
            post {
                success {
                    echo "====++++Releasing New Version to GitHub executed successfully++++===="
                }
                failure {
                    echo "====++++Releasing New Version to GitHub execution failed++++===="
                }
            }
        }
        stage("Publishing to NPM Repository") {
            when {
                branch 'master'
                buildingTag()
            }
            environment {
                NPM_TOKEN = credentials("npm")
            }
            steps {
                echo "====++++executing Publishing to NPM Repository++++===="
                sh 'echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> ~/.npmrc'
                sh "npm publish"
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