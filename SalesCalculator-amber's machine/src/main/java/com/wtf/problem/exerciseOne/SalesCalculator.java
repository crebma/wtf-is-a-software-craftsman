package com.wtf.problem.exerciseOne;

import java.util.HashMap;
import java.util.Map;

/**
 * Exercise #1: Sales Calculator Story 1: Given a bar code, then display the
 * product�s price
 * 
 * Bar Code Price 1234 $12.50
 * 
 * 1234 ---> $12.50 xxxx ----> No product with bar code xxxx <empty string> --->
 * Scanning error: empty bar code
 * 
 */

public class SalesCalculator {
	private static final String noBarcodeFound = "No product with bar code xxxx";

	
	private Map<String, String> priceMap = new HashMap<String, String>();
	
	public SalesCalculator() {
		priceMap.put("1234", "$12.50");
		priceMap.put("9876", "$4.25");
	}
	
	public String getPrice(final String barCode) {
		if (barCode == null || barCode.trim().equals("")) {
			throw new ScanningError();
		}
		
		if (priceMap.containsKey(barCode)) {
			return priceMap.get(barCode);
		} else {
			return noBarcodeFound;
		}
		 
		//return null;
	}
}
