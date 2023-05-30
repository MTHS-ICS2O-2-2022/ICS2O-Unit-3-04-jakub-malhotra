// Created by: Jakub Malhotra
// Created on: May 2023
//
// This program calculates fahrenheit to celsius

package main

import "fmt"

func main() {
	// This function fahrenheit to celsius
	var fahrenheit int
	var celsius int

	fmt.Println("This program converts fahrenheit to celsius.")
	fmt.Println()
	fmt.Print("Enter the temperature in degrees fahrenheit: ")
	fmt.Scanln(&fahrenheit)

	celsius = ((fahrenheit - 32) * 5) / 9

	fmt.Println()
	fmt.Println("The temperature in degrees celsius is:", celsius)
	fmt.Println("\nDone.")
}
