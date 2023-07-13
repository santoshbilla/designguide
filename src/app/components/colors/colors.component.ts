import { Component } from "@angular/core";

@Component({
    selector: "app-colors",
    templateUrl: "./colors.component.html",
    styleUrls: ["./colors.component.scss"],
})
export class ColorsComponent {
    oseBlues: any[];
    oseGreys: any[];
    oseReds: any[];
    backgroundColors: any[];

    constructor() {
        this.oseBlues = [
            {
                name: "ose-blue-10",
                code: "#00384d",
            },
            {
                name: "ose-blue-20",
                code: "#004966",
            },
            {
                name: "ose-blue-30",
                code: "#004d6a",
            },
            {
                name: "ose-blue-40",
                code: "#006085",
            },
            {
                name: "ose-blue-50",
                code: "#0092cc",
            },
            {
                name: "ose-blue-60",
                code: "#00b7ff",
            },
            {
                name: "ose-blue-70",
                code: "#4dccff",
            },
            {
                name: "ose-blue-80",
                code: "#8adeff",
            },
            {
                name: "ose-blue-90",
                code: "#bdecff",
            },
            {
                name: "ose-blue-100",
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
        this.oseReds = [
            {
                name: "ose-red-10",
                code: "#3c0b16",
            },
            {
                name: "ose-red-20",
                code: "#671426",
            },
            {
                name: "ose-red-30",
                code: "#921c35",
            },
            {
                name: "ose-red-40",
                code: "#bc2444",
            },
            {
                name: "ose-red-50",
                code: "#d93a5d",
            },
            {
                name: "ose-red-60",
                code: "#e26580",
            },
            {
                name: "ose-red-70",
                code: "#ea90a3",
            },
            {
                name: "ose-red-80",
                code: "#f2bac6",
            },
            {
                name: "ose-red-90",
                code: "#f7d4dc",
            },
            {
                name: "ose-red-100",
                code: "#fdf2f4",
            },
        ];

        this.oseGreys = [
            {
                name: "ose-gray-10",
                code: "#262626",
            },
            {
                name: "ose-gray-20",
                code: "#404040",
            },
            {
                name: "ose-gray-30",
                code: "#595959",
            },
            {
                name: "ose-gray-40",
                code: "#737373",
            },
            {
                name: "ose-gray-50",
                code: "#8c8c8c",
            },
            {
                name: "ose-gray-60",
                code: "#a6a6a6",
            },
            {
                name: "ose-gray-70",
                code: "#c4c6c8",
            },
            {
                name: "ose-gray-80",
                code: "#d9d9d9",
            },
            {
                name: "ose-gray-90",
                code: "#F2F2F2",
            },
            {
                name: "ose-gray-100",
                code: "#fafafa",
            },
        ];
    }
}
