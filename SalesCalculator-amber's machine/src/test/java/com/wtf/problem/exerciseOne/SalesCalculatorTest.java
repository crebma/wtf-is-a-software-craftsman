package com.wtf.problem.exerciseOne;

import static org.junit.Assert.*;

import org.junit.Test;

public class SalesCalculatorTest {
	
	private static final String VALID_PRICE_FOR_1234 = "$12.50";
	private static final String VALID_PRICE_FOR_9876 = "$4.25";
	private static final String NO_PRODUCT_FOR_BARCODE_FOUND = "No product with bar code xxxx";
	
	@Test (expected = ScanningError.class)
	public void testScanningError(){
		SalesCalculator calculator = new SalesCalculator();
		calculator.getPrice("");
	}
	
	@Test
	public void testPriceFor1234BarCode()
	{
		SalesCalculator calculator = new SalesCalculator();
		String price = calculator.getPrice("1234");
		assertEquals(VALID_PRICE_FOR_1234, price);
	}
	
	@Test
	public void testPriceFor9876BarCode()
	{
		SalesCalculator calculator = new SalesCalculator();
		String price = calculator.getPrice("9876");
		assertEquals(VALID_PRICE_FOR_9876, price);
	}
	
	@Test
	public void testPriceForXxxxBarCodeShowsNoProductWithBarcode()
	{
		SalesCalculator calculator = new SalesCalculator();
		String price = calculator.getPrice("xxxx");
		assertEquals(NO_PRODUCT_FOR_BARCODE_FOUND, price);
	}
	
	@Test
	public void testPriceForTwoValidBarCodes()
	{
		SalesCalculator calculator = new SalesCalculator();
		String price = calculator.getPrice("",);
		assertEquals(NO_PRODUCT_FOR_BARCODE_FOUND, price);
	}
}