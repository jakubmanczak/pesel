export const config = {
	uitext: {
		maintitle: ["PESEL Number", "PESEL"],
		subtitle: [
			"PESEL number verificator and analyzer.",
			"Analizator i weryfikator numeru PESEL.",
		],
		inputplaceholder: [
			"Enter a PESEL number to check. (11 digits)",
			"Podaj numer PESEL do sprawdzenia. (11 cyfr)",
		],
		inputstatus: {},
		results: {
			preresult: [
				"Enter a PESEL number to check.",
				"Podaj numer PESEL do sprawdzenia.",
			],
			presubresult: [
				"A suitable PESEL number should consist of 11 digits.",
				"PESEL powinien składać się z 11 cyfr.",
			],
			incorrect: ["PESEL number incorrect.", "Niepoprawny numer PESEL."],
			resultstitle: ["PESEL number correct.", "Poprawny numer PESEL."],
			dateofbirth: ["Date of birth", "Data urodzenia"],
			serialnum: ["Serial number", "Numer serii"],
			biosexnum: ["Biological sex number", "Numer płci"],
			biosexname: [
				["Female", "Kobieta"],
				["Male", "Mężczyzna"],
			],
			controlnum: ["Checksum", "Liczba kontrolna"],
		},
		realisticityWarnings: {
			warningPrefix: ["Realisticity warning:", "Ostrzeżenie dot. poprawności:"],
			yearInFuture: [
				"This number's encoded birthdate will occur in the future.",
				"Data urodzenia zakodowana w tym PESEL-u znajduje się w przyszłości.",
			],
			monthTooBig: [
				"This number's encoded month of birth exceeds 12, and thus the number cannot be assigned.",
				"Miesiąc urodzenia zakodowany w tym PESEL-u jest większy niż 12, przez co numer nie może być nadany.",
			],
			dayTooBig: [
				"This number's encoded day of birth exceeds the number of days in that month, and thus the numbercannot be assigned.",
				"Dzień urodzenia zakodowany w tym PESEL-u jest większy niż liczba dni w tamtym miesiącu, przez co numer nie może być nadany.",
			],
			bothTooBig: [
				"This number's encoded month and day of birth are beyond the realm of possibility, and thus the number cannot be assigned..",
				"Dzień i miesiąc urodzenia zakodowane w tym PESEL-u nie istnieją, przez co numer nie może być nadany.",
			],
		},
		disclaimer: [
			"All verification and analysis is performed in your browser - no data is sent anywhere.",
			"Całość weryfikacji i analizy dzieje się w przeglądarce - dane nie są nigdzie wysyłane.",
		],
	},
};
