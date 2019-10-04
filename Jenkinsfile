pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            args '-u root:root -v /var/lib/jenkins/.ssh:/root/.ssh'
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
            post {
                always {
                    echo "Test Stage Finished - Publishing Test Results"
                    junit 'coverage/test-results.xml'
                    cobertura coberturaReportFile: 'coverage/cobertura-coverage.xml'
                }
            }
        }
        stage("Building Component") {
            steps {
                echo "====++++executing Building Component++++===="
                sh "npm run build"
            }
            post {
                success {
                    echo "====++++Building Component executed successfully++++===="
                }
                failure {
                    echo "====++++Building Component execution failed++++===="
                }
            }
        }
        stage("Releasing New Version to GitHub") {
            when {
                branch 'master'
            }
            steps {
                echo "====++++executing Releasing New Version to GitHub++++===="
                sh "git config user.name $GIT_AUTHOR_NAME"
                sh "git config user.email $GIT_AUTHOR_EMAIL"
                def versioningComponentScript = sh(
                    returnStdout: true,
                    script: "curl https://raw.githubusercontent.com/fcarrascosa/scripts/master/versioning-component.sh"
                )
                sh versioningComponentScript
                sh "git tag"
                sh "git push origin master"
                sh "git push origin --tags"
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
                buildingTag()
            }
            environment {
                NPM_TOKEN = credentials("fcarrascosa-npm")
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
    post {
        always {
            echo "Build Finished - Clearing Workspace"
            sh "chmod -R 777 ."
            deleteDir()
            echo "Sending email to owner"
            emailext(
                    mimeType: 'text/html',
                    subject: "[JENKINS] - ${currentBuild.currentResult} - ${env.JOB_NAME}",
                    to: '$DEFAULT_RECIPIENTS',
                    body: '''${SCRIPT, template="groovy-html.template"}'''
            )
        }
    }
}
