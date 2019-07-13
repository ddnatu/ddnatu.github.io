import React from 'react'
import axios from 'axios'
import moment from 'moment'
//const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY1NmMzZGQyMWQwZmVmODgyZTA5ZTBkODY5MWNhNWM3ZjJiMGQ2MjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmF0dWt1bHZydXR0YW50LWM2NjM5IiwiYXVkIjoibmF0dWt1bHZydXR0YW50LWM2NjM5IiwiYXV0aF90aW1lIjoxNTU2MTMyOTc1LCJ1c2VyX2lkIjoiRFREN05CcFV0ZWZYYml3U0VzNncwYkl4T3RiMiIsInN1YiI6IkRURDdOQnBVdGVmWGJpd1NFczZ3MGJJeE90YjIiLCJpYXQiOjE1NTYxMzI5NzUsImV4cCI6MTU1NjEzNjU3NSwiZW1haWwiOiJhZG1pbkBuYXR1LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkBuYXR1LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ex-poBi5a5hOJ2p7HmzLlLLErhVcd9t_UNtJnGDBNJAvfkYWEFo7s6eKfLVclaExhcysTrXmOOecqn0mlKADw_R1DVXcI_maJGOgCSjoSdVUpj93y8dlzdhujuE7dUjIe7HI3ip1BJcPEWhyZMMHDBB31l8pM9iqCg2kQJD2BIhBgUrTStA0Q-XhJtuY8Bx2pnZOAiR6E_DvuQGcKj-Hr5BxfWUz3gBQe-ti_d30IwAD3_HlzWtf0mfARxspHB68ZcmwPKGBsIPl-GIj97H8hyBJL_-Kj-r3j38iFaQKtj7ltf-flbfE6rAiohOe-quXb4QLYr4wf9Y0wINjKVtY9A'

class Birthday extends React.Component {
    // state = {
    //     user: this.props.user,
    //     birthdayList: [],
    // }

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            birthdayList: [],
        }
    }

    componentDidMount() {
        //console.log('state before', this.state)
        var self = this
        axios
            .get(
            'https://firestore.googleapis.com/v1/projects/natukulvruttant-c6639/databases/(default)/documents/birthdays/j9H8JUR70hHsqqk8ekGX'
            )
            .then(function (response) {
                // handle success
                let names = Object.keys(response.data.fields)
                let birthdayList = names.map(item => {
                    return {
                        [item]: moment(response.data.fields[item].timestampValue).format('MMM D'),
                    }
                })
                self.setState({
                    birthdayList: birthdayList,
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
            .then(function () {
                // always executed
            })
    }

    render() {
        const { birthdayList } = this.state
        return birthdayList.map((item, i) => {
            return (
                <div key={i}>
                    {Object.keys(item)} ---- {Object.values(item)}
                </div>
            )
        })
    }
}

export default Birthday
