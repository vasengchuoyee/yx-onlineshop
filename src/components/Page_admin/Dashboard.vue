<template>
    <v-container>
        <h2 class="rows">KK Gift Shop (KiewKhem gift online shop)</h2><br>
        <v-row class="mains">

            <v-col class="widths">
                <v-card class="border">
                    <v-div class="top">
                        <p>ຍອດຂາຍວັນນີ້</p>
                        <b>$53,000</b><br>
                        <p><span>+55%</span> since yesterday</p>
                    </v-div>
                    <v-icon class="margin" color="red">mdi-cards</v-icon>
                </v-card>
            </v-col>

            <v-col class="widths">
                <v-card class="border">
                    <v-div class="top">
                        <p>ລູກຄ້າ</p>
                        <b>2,300</b><br>
                        <p><span>+3%</span> since last week</p>
                    </v-div>
                    <v-icon class="margin" color="green">mdi-human-greeting</v-icon>
                </v-card>
            </v-col>

            <v-col class="widths">
                <v-card class="border">
                    <v-div class="top">
                        <p>ສິ້ນຄ້າໃນສ່າງ</p>
                        <b>+3,464</b><br>
                        <p>Todays</p>
                    </v-div>
                    <v-icon class="margin" color="blue">mdi-cart</v-icon>
                </v-card>
            </v-col>

            <v-col class="widths">
                <v-card class="border">
                    <v-div class="top">
                        <p>ລາຍການຂາຍທັງໝົດ</p>
                        <b>$103,430</b><br>
                        <p><span>+5%</span>This Month</p>
                    </v-div>
                    <v-icon class="margin" color="orange">mdi-table</v-icon>
                </v-card>
            </v-col>
        </v-row>

        <v-col class="center">
            <canvas ref="myChart"></canvas>
            <div>
                <button v-for="(action, index) in actions" :key="index" @click="performAction(action)">
                    {{ action.name }}/ /
                </button>
            </div>
        </v-col>
    </v-container>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    name: 'AboutView',
    components: {


    },
    data() {
        return {
            actions: [
                {
                    name: 'Randomize',
                    handler: 'randomizeChart'
                },
                {
                    name: 'Add Dataset',
                    handler: 'addDataset'
                },
                {
                    name: 'Add Data',
                    handler: 'addData'
                },
                {
                    name: 'Remove Dataset',
                    handler: 'removeDataset'
                },
                {
                    name: 'Remove Data',
                    handler: 'removeData'
                }
            ]
        };
    },
    mounted() {
        const ctx = this.$refs.myChart.getContext('2d');

        const config = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May'], 
                datasets: [
                    {
                        label: 'ຍອດຂາຍ',
                        data: [-50, 20, -30, 40, 10], 
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    },
                    {
                        label: 'ຍອດຊື້',
                        data: [10, -30, 40, -20, 30], 
                        borderColor: 'blue',
                        backgroundColor: 'rgba(0, 0, 255, 0.5)',
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart'
                    }
                }
            }
        };

        this.chart = new Chart(ctx, config);
    },

    methods: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },

        showTooltip() {
            this.isTooltipVisible = true;
        },
        hideTooltip() {
            this.isTooltipVisible = false;
        },

        randomizeChart(chart) {
            chart.data.datasets.forEach(dataset => {
                dataset.data = dataset.data.map(() => Math.floor(Math.random() * 200 - 100));
            });
            chart.update();
        },
        addDataset(chart) {
            const data = chart.data;
            const newDataset = {
                label: 'Dataset ' + (data.datasets.length + 1),
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderColor: 'green',
                data: Array.from({ length: data.labels.length }, () => Math.floor(Math.random() * 200 - 100)),
            };
            chart.data.datasets.push(newDataset);
            chart.update();
        },
        addData(chart) {
            const data = chart.data;
            if (data.datasets.length > 0) {
                data.labels.push('New Label');
                data.datasets.forEach(dataset => {
                    dataset.data.push(Math.floor(Math.random() * 200 - 100));
                });
                chart.update();
            }
        },
        removeDataset(chart) {
            chart.data.datasets.pop();
            chart.update();
        },
        removeData(chart) {
            chart.data.labels.pop(); 
            chart.data.datasets.forEach(dataset => {
                dataset.data.pop();
            });
            chart.update();
        },
        performAction(action) {
            this[action.handler](this.chart);
        }
    },
}
</script>

<style scoped>
.mains {
    background-color: rgb(218, 47, 245);
    color: white;
}

.rows {
    margin-top: 20px;
    text-align: center;
}

.backg {
    background-color: white;
    display: flex;
}

h2 {
    margin-left: 40px;
}

.lefts {
    margin-left: 280px;
    margin-top: -4px;
}

.border {
    width: 220px;
    height: 95px;
    margin-left: 30px;
    display: flex;
}

.margin {
    margin-top: 0px;
    margin-left: 30px;
}

.top {
    margin-top: 20px;
    font-size: small;
    margin-right: -10px;
    width: 100%;
    height: 100%;
    text-align: center;
}

.widths {
    width: 280px;
    height: 200px;
    margin-right: 0px;
}
.border:hover {
    background-color: rgb(200, 156, 241);
}


b {
    color: red;
}

span {
    color: rgb(216, 30, 223);
}

.center {
    text-align: center;
    margin-left: 100px;
    width: 900px;
    height: 400px;
}
</style>