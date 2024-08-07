const url = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-FF9390C3-6F01-4221-BA8A-CB6C4F1429DB&elementName=";
const counties = ['臺北市', '新北市', '基隆市', '桃園市', '新竹縣', '新竹市', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '連江縣', '金門縣', '澎湖縣'];

let sunny = `
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 44.9 44.9" style="enable-background:new 0 0 44.9 44.9;" xml:space="preserve" height="40px" width="40px">
                <g id="Sun">
                    <circle id="XMLID_61_" class="yellow" cx="22.4" cy="22.6" r="11"/>
                <g>
                    <path id="XMLID_60_" class="yellow" d="M22.6,8.1h-0.3c-0.3,0-0.6-0.3-0.6-0.6v-7c0-0.3,0.3-0.6,0.6-0.6l0.3,0c0.3,0,0.6,0.3,0.6,0.6 v7C23.2,7.8,22.9,8.1,22.6,8.1z"/>
                    <path id="XMLID_59_" class="yellow" d="M22.6,36.8h-0.3c-0.3,0-0.6,0.3-0.6,0.6v7c0,0.3,0.3,0.6,0.6,0.6h0.3c0.3,0,0.6-0.3,0.6-0.6v-7 C23.2,37,22.9,36.8,22.6,36.8z"/>
                    <path id="XMLID_58_" class="yellow" d="M8.1,22.3v0.3c0,0.3-0.3,0.6-0.6,0.6h-7c-0.3,0-0.6-0.3-0.6-0.6l0-0.3c0-0.3,0.3-0.6,0.6-0.6h7 C7.8,21.7,8.1,21.9,8.1,22.3z"/>
                    <path id="XMLID_57_" class="yellow" d="M36.8,22.3v0.3c0,0.3,0.3,0.6,0.6,0.6h7c0.3,0,0.6-0.3,0.6-0.6v-0.3c0-0.3-0.3-0.6-0.6-0.6h-7 C37,21.7,36.8,21.9,36.8,22.3z"/>
                    <path id="XMLID_56_" class="yellow" d="M11.4,31.6l0.2,0.3c0.2,0.2,0.2,0.6-0.1,0.8l-5.3,4.5c-0.2,0.2-0.6,0.2-0.8-0.1l-0.2-0.3 c-0.2-0.2-0.2-0.6,0.1-0.8l5.3-4.5C10.9,31.4,11.2,31.4,11.4,31.6z"/>
                    <path id="XMLID_55_" class="yellow" d="M33.2,13l0.2,0.3c0.2,0.2,0.6,0.3,0.8,0.1l5.3-4.5c0.2-0.2,0.3-0.6,0.1-0.8l-0.2-0.3 c-0.2-0.2-0.6-0.3-0.8-0.1l-5.3,4.5C33,12.4,33,12.7,33.2,13z"/>
                    <path id="XMLID_54_" class="yellow" d="M11.4,13.2l0.2-0.3c0.2-0.2,0.2-0.6-0.1-0.8L6.3,7.6C6.1,7.4,5.7,7.5,5.5,7.7L5.3,7.9 C5.1,8.2,5.1,8.5,5.4,8.7l5.3,4.5C10.9,13.5,11.2,13.5,11.4,13.2z"/>
                    <path id="XMLID_53_" class="yellow" d="M33.2,31.9l0.2-0.3c0.2-0.2,0.6-0.3,0.8-0.1l5.3,4.5c0.2,0.2,0.3,0.6,0.1,0.8l-0.2,0.3 c-0.2,0.2-0.6,0.3-0.8,0.1l-5.3-4.5C33,32.5,33,32.1,33.2,31.9z"/>
                    <animate attributeType="CSS"
                    attributeName="opacity"
                    attributeType="XML"
                    dur="0.5s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    values="1;0.6;1"
                    calcMode="linear"/>
                </g>
                </g>
                </svg>
            `

let cloudyWithSun = `
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 61.7 42.8" style="enable-background:new 0 0 61.7 42.8;" xml:space="preserve">
                                <g id="Cloud_3">
                                    <g id="White_cloud_3">
                                    <path id="XMLID_24_" class="white" d="M47.2,42.8H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0C0,30.5,3.5,27,7.9,27h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,39.2,51.6,42.8,47.2,42.8z"/>
                                    <circle id="XMLID_23_" class="white" cx="17.4" cy="25.5" r="9.3"/>
                                    <circle id="XMLID_22_" class="white" cx="34.5" cy="23.9" r="15.6"/>
                                    <animateTransform attributeName="transform"
                                        attributeType="XML"
                                        dur="6s"
                                        keyTimes="0;0.5;1"
                                        repeatCount="indefinite"
                                        type="translate"
                                        values="0;5;0"
                                        calcMode="linear">
                                    </animateTransform>
                                    </g>
                                    <g id="Sun_3">
                                    <circle id="XMLID_30_" class="yellow" cx="31.4" cy="18.5" r="9"/>
                                    <g>
                                        <path id="XMLID_31_" class="yellow" d="M31.4,6.6L31.4,6.6c-0.4,0-0.6-0.3-0.6-0.6V0.6C30.8,0.3,31,0,31.3,0l0.1,0 C31.7,0,32,0.3,32,0.6v5.5C32,6.4,31.7,6.6,31.4,6.6z"/>
                                        <path id="XMLID_34_" class="yellow" d="M31.4,30.1L31.4,30.1c-0.4,0-0.6,0.3-0.6,0.6v5.5c0,0.3,0.3,0.6,0.6,0.6h0.1 c0.3,0,0.6-0.3,0.6-0.6v-5.5C32,30.4,31.7,30.1,31.4,30.1z"/>
                                        <path id="XMLID_35_" class="yellow" d="M19.6,18.3L19.6,18.3c0,0.4-0.3,0.6-0.6,0.6h-5.5c-0.3,0-0.6-0.3-0.6-0.6v-0.1 c0-0.3,0.3-0.6,0.6-0.6H19C19.3,17.8,19.6,18,19.6,18.3z"/>
                                        <path id="XMLID_33_" class="yellow" d="M43.1,18.3L43.1,18.3c0,0.4,0.3,0.6,0.6,0.6h5.5c0.3,0,0.6-0.3,0.6-0.6v-0.1 c0-0.3-0.3-0.6-0.6-0.6h-5.5C43.4,17.8,43.1,18,43.1,18.3z"/>
                                        <path id="XMLID_37_" class="yellow" d="M22.4,26L22.4,26c0.3,0.3,0.2,0.7,0,0.9l-4.2,3.6c-0.2,0.2-0.6,0.2-0.8-0.1l-0.1-0.1 c-0.2-0.2-0.2-0.6,0.1-0.8l4.2-3.6C21.9,25.8,22.2,25.8,22.4,26z"/>
                                        <path id="XMLID_36_" class="yellow" d="M40.3,10.7L40.3,10.7c0.3,0.3,0.6,0.3,0.8,0.1l4.2-3.6c0.2-0.2,0.3-0.6,0.1-0.8l-0.1-0.1 c-0.2-0.2-0.6-0.3-0.8-0.1l-4.2,3.6C40.1,10.1,40,10.5,40.3,10.7z"/>
                                        <path id="XMLID_39_" class="yellow" d="M22.4,10.8L22.4,10.8c0.3-0.3,0.2-0.7,0-0.9l-4.2-3.6c-0.2-0.2-0.6-0.2-0.8,0.1l-0.1,0.1 c-0.2,0.2-0.2,0.6,0.1,0.8l4.2,3.6C21.9,11,22.2,11,22.4,10.8z"/>
                                        <path id="XMLID_38_" class="yellow" d="M40.3,26.1L40.3,26.1c0.3-0.3,0.6-0.3,0.8-0.1l4.2,3.6c0.2,0.2,0.3,0.6,0.1,0.8l-0.1,0.1 c-0.2,0.2-0.6,0.3-0.8,0.1l-4.2-3.6C40.1,26.7,40,26.3,40.3,26.1z"/>
                                        <animate attributeType="CSS"
                                        attributeName="opacity"
                                        attributeType="XML"
                                        dur="0.5s"
                                        keyTimes="0;0.5;1"
                                        repeatCount="indefinite"
                                        values="1;0.6;1"
                                        calcMode="linear"/>
                                    </g>
                                    </g>
                                    <animateTransform attributeName="transform"
                                    attributeType="XML"
                                    dur="2s"
                                    keyTimes="0;1"
                                    repeatCount="indefinite"
                                    type="scale"
                                    values="1;1"
                                    calcMode="linear">
                                    </animateTransform>
                                </g>
                                <g id="Gray_cloud_3">
                                    <path id="XMLID_20_" class="gray" d="M55.7,25.1H34.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C61.7,22.4,59,25.1,55.7,25.1z"/>
                                    <circle id="XMLID_19_" class="gray" cx="46.7" cy="13.4" r="10.7"/>
                                    <animateTransform attributeName="transform"
                                    attributeType="XML"
                                    dur="6s"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                    type="translate"
                                    values="0;-3;0"
                                    calcMode="linear">
                                    </animateTransform>
                                </g>
                                </g>
                                </svg>
                    `

let cloudy = `
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 40" style="enable-background:new 0 0 60.7 40;" xml:space="preserve">
                <g id="Cloud_1">
                    <g id="White_cloud_1">
                        <path id="XMLID_2_" class="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"/>
                        <circle id="XMLID_3_" class="white" cx="17.4" cy="22.8" r="9.3"/>
                        <circle id="XMLID_4_" class="white" cx="34.5" cy="21.1" r="15.6"/>
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        dur="6s"
                        keyTimes="0;0.5;1"
                        repeatCount="indefinite"
                        type="translate"
                        values="0;5;0"
                        calcMode="linear">
                    </animateTransform>
                    </g>
                    <g id="Gray_cloud_1">
                        <path id="XMLID_6_" class="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"/>
                        <circle id="XMLID_7_" class="gray" cx="45.7" cy="10.7" r="10.7"/>
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        dur="6s"
                        keyTimes="0;0.5;1"
                        repeatCount="indefinite"
                        type="translate"
                        values="0;-3;0"
                        calcMode="linear">
                    </animateTransform>
                    </g>
                </g>
                </svg>
            `

let rainy = `
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 60" style="enable-background:new 0 0 55.1 49.5;" xml:space="preserve">
                        <g id="Cloud_2">
                            <g id="Rain_2">
                            <path id="rain_2_left" class="white" d="M20.7,46.4c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S20.7,44.7,20.7,46.4z"></path>
                            <path id="rain_2_mid" class="white" d="M31.4,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S31.4,44.7,31.4,46.4z"></path>
                            <path id="rain_2_right" class="white" d="M41.3,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S41.3,44.7,41.3,46.4z"></path>
                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                dur="1s"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                type="translate"
                                values="0 0;0 10"
                                calcMode="linear">
                            </animateTransform>
                            <animate attributeType="CSS"
                            attributeName="opacity"
                            attributeType="XML"
                            dur="1s"
                            keyTimes="0;1"
                            repeatCount="indefinite"
                            values="1;0"
                            calcMode="linear"/>
                            </g>
                            <g id="White_cloud_2">
                            <path id="XMLID_14_" class="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
                            <circle id="XMLID_13_" class="white" cx="17.4" cy="17.3" r="9.3"/>
                            <circle id="XMLID_10_" class="white" cx="34.5" cy="15.6" r="15.6"/>
                            </g>
                        </g>
                        </svg>
                `

let CloudyWithRainAndLightning = `
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 80" style="enable-background:new 0 0 60.7 55;" xml:space="preserve">
                                    <g id="Cloud_6">
                                    <g id="White_cloud_6">
                                        <path id="XMLID_81_" class="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"/>
                                        <circle id="XMLID_80_" class="white" cx="17.4" cy="22.8" r="9.3"/>
                                        <circle id="XMLID_77_" class="white" cx="34.5" cy="21.1" r="15.6"/>
                                    </g>
                                    <g id="Gray_cloud_6">
                                        <path id="XMLID_75_" class="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"/>
                                        <circle id="XMLID_74_" class="gray" cx="45.7" cy="10.7" r="10.7"/>
                                        <animateTransform attributeName="transform"
                                        attributeType="XML"
                                        dur="6s"
                                        keyTimes="0;0.5;1"
                                        repeatCount="indefinite"
                                        type="translate"
                                        values="0;-3;0"
                                        calcMode="linear">
                                        </animateTransform>
                                    </g>
                                    <g id="Lightning_6">
                                        <path id="XMLID_94_" class="yellow" d="M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5
                                    c-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3
                                    c-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0
                                    l-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"/>
                                        <animate attributeType="CSS"
                                        attributeName="opacity"
                                        attributeType="XML"
                                        dur="1.5s"
                                        keyTimes="0;0.5;1"
                                        repeatCount="indefinite"
                                        values="1;0;1"
                                        calcMode="linear"/>
                                    </g>
                                    <g id="Rain_6">
                                        <path id="Rain_6_right" class="white" d="M36.3,51.9c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S36.3,50.2,36.3,51.9z"/>
                                        <path id="Rain_6_mid" class="white" d="M26.4,51.9c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S26.4,50.2,26.4,51.9z"/>
                                        <path id="Rain_6_left" class="white" d="M15.7,51.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S15.7,50.2,15.7,51.9z"/>
                                        <animateTransform attributeName="transform"
                                        attributeType="XML"
                                        dur="1s"
                                        keyTimes="0;1"
                                        repeatCount="indefinite"
                                        type="translate"
                                        values="0 0;0 10"
                                        calcMode="linear">
                                        </animateTransform>
                                        <animate attributeType="CSS"
                                        attributeName="opacity"
                                        attributeType="XML"
                                        dur="1s"
                                        keyTimes="0;1"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        calcMode="linear"/>
                                    </g>
                                    </g>
                                    </svg>
                                `

let snowy = `
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 52.5" style="enable-background:new 0 0 55.1 52.5;" xml:space="preserve">
                <g id="Cloud_7">
                <g id="White_cloud_7">
                    <path id="XMLID_8_" class="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
                    <circle id="XMLID_5_" class="white" cx="17.4" cy="17.3" r="9.3"/>
                    <circle id="XMLID_1_" class="white" cx="34.5" cy="15.6" r="15.6"/>
                </g>
                <circle class="white" cx="37" cy="43.5" r="3">
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="1.5s"
                    keyTimes="0;0.33;0.66;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -2;3 2; 1 4; 2 6"
                    calcMode="linear">
                    </animateTransform>
                </circle>
                <circle class="white" cx="27" cy="43.5" r="3">
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="1.5s"
                    keyTimes="0;0.33;0.66;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -2;3 2; 1 4; 2 6"
                    calcMode="linear">
                    </animateTransform>
                </circle>
                <circle class="white" cx="17" cy="43.5" r="3">
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="1.5s"
                    keyTimes="0;0.33;0.66;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -2;3 2; 1 4; 2 6"
                    calcMode="linear">
                    </animateTransform>
                </circle>
                </g>
                </svg>
            `

fetch(url)
    .then(function (respose) {
        return respose.json();
    })
    .then(function (data) {
        let weatherData = {};
        locations = data['records']['location'];
        locations.forEach(function (location) {
            locationName = location['locationName'];
            weatherData[locationName] = {};
            weatherElements = location['weatherElement'];

                let wxValue = {}
                weatherElements.forEach(function (weatherElement) {
                    let elementName = weatherElement['elementName'];
                    let parameterName = weatherElement['time'][0]['parameter']['parameterName'];
                    wxValue[elementName] = [parameterName]

                });

                let parameterValue = weatherElements[0]['time'][0]['parameter']['parameterValue'];
                wxValue['Wx'].push(parameterValue)
                weatherData[locationName] = wxValue
                console.log(parameterValue)
            
        });

        const containerElement = document.querySelector('.container')
        let cards = '';

        counties.forEach(function (county) {
            if(weatherData[county]['Wx'][1] <= 1){
                img = sunny;
            } else if(weatherData[county]['Wx'][1] <=4){
                img = cloudyWithSun
            } else if(weatherData[county]['Wx'][1] <=7){
                img = cloudy;
            } else if(weatherData[county]['Wx'][1] <=14){
                img = rainy;
            } else if(weatherData[county]['Wx'][1] <=22){
                img = CloudyWithRainAndLightning;
            } else if(weatherData[county]['Wx'][1] ==23){
                img = snowy;
            } else if(weatherData[county]['Wx'][1] <=26){
                img = cloudyWithSun;
            } else if(weatherData[county]['Wx'][1] <=28){
                img = cloudy;
            } else if(weatherData[county]['Wx'][1] <=41){
                img = rainy;
            }else if(weatherData[county]['Wx'][1] ==42){
                img = snowy;
            }

            cards += ` 
                        <div class="card">
                            <div class="location">${county}</div>
                            <div class="left-block">
                                <div class="element">${img}</div>
                            </div>
                            <div class="right-block">
                                <div class="wx">${weatherData[county]['Wx'][0]}</div>
                                <div class="temperature">
                                    <div class="maxt">${weatherData[county]['MaxT']}°C</div>
                                    <div class="mint">${weatherData[county]['MinT']}°C</div>
                                </div>
                                <div class="ci">${weatherData[county]['CI']}</div>
                                <div class="pop">降雨機率：${weatherData[county]['PoP']}%</div>
                            </div>
                        </div>
                    `

            containerElement.innerHTML = cards;
        })
    });
