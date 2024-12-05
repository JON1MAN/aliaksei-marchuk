import {Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import idea from "../../assets/icons/experience/idea.svg";
import aibron from "../../assets/icons/experience/companies/aibron.png"
import ink from "../../assets/icons/experience/companies/img.png"

const chartConfig = {
    type: "line",
    height: 240,
    series: [
        {
            name: "XP",
            data: [40, 100, 140, 230, 250, 300, 500, 600, 650, 850, 1150, 1300, 2000],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#38ff22"],
        stroke: {
            lineCap: "round",
            curve: "smooth",
        },
        markers: {
            size: 2,
            colors: ["#1645ff"],
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
                size: undefined,
                sizeOffset: 3
            }
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Nov 2023",
                "Dec",
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec 2024"
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

const Graph = () => {
    return (
        <Card>
            <CardHeader
                floated={false}
                shadow={false}
                color={"transparent"}
                className="flex flex-col gap-2 rounded-lg md:flex-row md:items-center">
                <div className="w-fit rounded-lg bg-white p-5 text-white">
                    <img src={idea} alt="Profile" className="w-24 р-24"/>
                </div>

                <div>
                    <Typography variant="h2" color="blue-gray" className="font-bold">
                        My Experience
                    </Typography>
                    <Typography variant="small" color="gray" className="max-w-sm font-normal">
                        Here is experience I am gaining to become great Software Engineer
                    </Typography>
                </div>
            </CardHeader>

            <CardBody className="px-2 pb-0">
                <Chart {...chartConfig} />
            </CardBody>

            <CardFooter>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-start space-x-5 shadow-xl rounded-2xl">
                        <div className="w-20 h-20 rounded-2xl">
                            <img src={aibron} className="w-20 h-20 rounded-2xl"/>
                        </div>
                        <div className="flex flex-col">
                            <Typography variant="h2" color="blue-gray">
                                Java Backend Developer Intern
                            </Typography>
                            <Typography variant="small" color="gray" className="max-w-sm font-normal">
                                28th July 2024 - 1st September 2024
                            </Typography>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-start space-x-5 shadow-lg rounded-2xl">
                        <div className="w-20 h-20 rounded-l-2xl bg-blue-100">
                            <img src={ink} className="object-cover"/>
                        </div>
                        <div className="flex flex-col">
                            <Typography variant="h2" color="blue-gray">
                                Junior Full Stack Developer
                            </Typography>
                            <Typography variant="small" color="gray" className="max-w-sm font-normal">
                                1st October 2024 - 1st November 2024
                            </Typography>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default Graph;
