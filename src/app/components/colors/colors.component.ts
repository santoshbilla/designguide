import { Component } from "@angular/core";

@Component({
    selector: "app-colors",
    templateUrl: "./colors.component.html",
    styleUrls: ["./colors.component.scss"],
})
export class ColorsComponent {
    osseBlues: any[];
    osseGreys: any[];
    osseReds: any[];
    backgroundColors: any[];

    constructor() {
        this.osseBlues = [
            {
                name: "osse-blue-10",
                code: "#00384d",
            },
            {
                name: "osse-blue-20",
                code: "#004966",
            },
            {
                name: "osse-blue-30",
                code: "#004d6a",
            },
            {
                name: "osse-blue-40",
                code: "#006085",
            },
            {
                name: "osse-blue-50",
                code: "#0092cc",
            },
            {
                name: "osse-blue-60",
                code: "#00b7ff",
            },
            {
                name: "osse-blue-70",
                code: "#4dccff",
            },
            {
                name: "osse-blue-80",
                code: "#8adeff",
            },
            {
                name: "osse-blue-90",
                code: "#bdecff",
            },
            {
                name: "osse-blue-100",
                code: "#f0fbff",
            },
        ];

        this.backgroundColors = [
            {
                name: "bg-blue",
                code: "#004d6a",
            },
            {
                name: "bg-blue-light",
                code: "#f0fbff",
            },
            {
                name: "bg-gray",
                code: "#F2F2F2",
            },
            {
                name: "bg-tan",
                code: "#faf8f4",
            },
            {
                name: "bg-white",
                code: "#FFFFFF",
            },
        ];
        this.osseReds = [
            {
                name: "osse-red-10",
                code: "#3c0b16",
            },
            {
                name: "osse-red-20",
                code: "#671426",
            },
            {
                name: "osse-red-30",
                code: "#921c35",
            },
            {
                name: "osse-red-40",
                code: "#bc2444",
            },
            {
                name: "osse-red-50",
                code: "#d93a5d",
            },
            {
                name: "osse-red-60",
                code: "#e26580",
            },
            {
                name: "osse-red-70",
                code: "#ea90a3",
            },
            {
                name: "osse-red-80",
                code: "#f2bac6",
            },
            {
                name: "osse-red-90",
                code: "#f7d4dc",
            },
            {
                name: "osse-red-100",
                code: "#fdf2f4",
            },
        ];

        this.osseGreys = [
            {
                name: "osse-gray-10",
                code: "#262626",
            },
            {
                name: "osse-gray-20",
                code: "#404040",
            },
            {
                name: "osse-gray-30",
                code: "#595959",
            },
            {
                name: "osse-gray-40",
                code: "#737373",
            },
            {
                name: "osse-gray-50",
                code: "#8c8c8c",
            },
            {
                name: "osse-gray-60",
                code: "#a6a6a6",
            },
            {
                name: "osse-gray-70",
                code: "#c4c6c8",
            },
            {
                name: "osse-gray-80",
                code: "#d9d9d9",
            },
            {
                name: "osse-gray-90",
                code: "#F2F2F2",
            },
            {
                name: "osse-gray-100",
                code: "#fafafa",
            },
        ];
    }
}
