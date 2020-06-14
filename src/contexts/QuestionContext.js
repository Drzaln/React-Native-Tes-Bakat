import React, { useState, useContext } from 'react'
import { NavigationContext } from '@react-navigation/native'

const initialState = {
	satu: 0,
	dua: 0,
	tiga: 0,
	empat: 0,
	lima: 0,
	enam: 0,
	tujuh: 0,
	delapan: 0,
	sembilan: 0,
	sepuluh: 0,
	sebelas: 0,
	duabelas: 0,
	tigabelas: 0,
	empatbelas: 0,
	limabelas: 0,
	enambelas: 0,
	tujuhbelas: 0,
	delapanbelas: 0,
	sembilanbelas: 0,
	duapuluh: 0,
	duasatu: 0,
	duadua: 0,
	duatiga: 0,
	duaempat: 0,
	dualima: 0,
	duaenam: 0,
	duatujuh: 0,
	duadelapan: 0,
	duasembilan: 0,
	tigapuluh: 0,
	tigasatu: 0,
	tigadua: 0,
	linguistik: 0,
	matLog: 0,
	visualSpace: 0,
	musik: 0,
	interpersonal: 0,
	intrapersonal: 0,
	kinestetik: 0,
	naturalis: 0,
	_handleAnswer: () => {},
	_navigate: () => {}
}

export const QuestionContext = React.createContext(initialState)

export const { Provider: QuestionProvider, Consumer: QuestionConsumer } = QuestionContext

export const QuestionController = ({ children }) => {
	const [ satu, setsatu ] = useState(0)
	const [ dua, setdua ] = useState(0)
	const [ tiga, settiga ] = useState(0)
	const [ empat, setempat ] = useState(0)
	const [ lima, setlima ] = useState(0)
	const [ enam, setenam ] = useState(0)
	const [ tujuh, settujuh ] = useState(0)
	const [ delapan, setdelapan ] = useState(0)
	const [ sembilan, setsembilan ] = useState(0)
	const [ sepuluh, setsepuluh ] = useState(0)
	const [ sebelas, setsebelas ] = useState(0)
	const [ duabelas, setduabelas ] = useState(0)
	const [ tigabelas, settigabelas ] = useState(0)
	const [ empatbelas, setempatbelas ] = useState(0)
	const [ limabelas, setlimabelas ] = useState(0)
	const [ enambelas, setenambelas ] = useState(0)
	const [ tujuhbelas, settujuhbelas ] = useState(0)
	const [ delapanbelas, setdelapanbelas ] = useState(0)
	const [ sembilanbelas, setsembilanbelas ] = useState(0)
	const [ duapuluh, setduapuluh ] = useState(0)
	const [ duasatu, setduasatu ] = useState(0)
	const [ duadua, setduadua ] = useState(0)
	const [ duatiga, setduatiga ] = useState(0)
	const [ duaempat, setduaempat ] = useState(0)
	const [ dualima, setdualima ] = useState(0)
	const [ duaenam, setduaenam ] = useState(0)
	const [ duatujuh, setduatujuh ] = useState(0)
	const [ duadelapan, setduadelapan ] = useState(0)
	const [ duasembilan, setduasembilan ] = useState(0)
	const [ tigapuluh, settigapuluh ] = useState(0)
	const [ tigasatu, settigasatu ] = useState(0)
	const [ tigadua, settigadua ] = useState(0)
	const navigation = useContext(NavigationContext)

	const _handleAnswer = (questionPoint, questionId) => {
		switch (questionId) {
			case 1:
				setsatu(questionPoint)
				break
			case 2:
				setdua(questionPoint)
				break
			case 3:
				settiga(questionPoint)
				break
			case 4:
				setempat(questionPoint)
				break
			case 5:
				setlima(questionPoint)
				break
			case 6:
				setenam(questionPoint)
				break
			case 7:
				settujuh(questionPoint)
				break
			case 8:
				setdelapan(questionPoint)
				break
			case 9:
				setsembilan(questionPoint)
				break
			case 10:
				setsepuluh(questionPoint)
				break
			case 11:
				setsebelas(questionPoint)
				break
			case 12:
				setduabelas(questionPoint)
				break
			case 13:
				settigabelas(questionPoint)
				break
			case 14:
				setempatbelas(questionPoint)
				break
			case 15:
				setlimabelas(questionPoint)
				break
			case 16:
				setenambelas(questionPoint)
				break
			case 17:
				settujuhbelas(questionPoint)
				break
			case 18:
				setdelapanbelas(questionPoint)
				break
			case 19:
				setsembilanbelas(questionPoint)
				break
			case 20:
				setduapuluh(questionPoint)
				break
			case 21:
				setduasatu(questionPoint)
				break
			case 22:
				setduadua(questionPoint)
				break
			case 23:
				setduatiga(questionPoint)
				break
			case 24:
				setduaempat(questionPoint)
				break
			case 25:
				setdualima(questionPoint)
				break
			case 26:
				setduaenam(questionPoint)
				break
			case 27:
				setduatujuh(questionPoint)
				break
			case 28:
				setduadelapan(questionPoint)
				break
			case 29:
				setduasembilan(questionPoint)
				break
			case 30:
				settigapuluh(questionPoint)
				break
			case 31:
				settigasatu(questionPoint)
				break
			case 32:
				settigadua(questionPoint)
				break

			default:
				break
		}
	}

	let linguistik = lima + sembilan + duasatu + duadua
	let matLog = enam + sebelas + duaempat + tigasatu
	let visualSpace = dua + duabelas + sembilanbelas + duatujuh
	let musik = empat + sepuluh + delapanbelas + tigapuluh
	let interpersonal = tiga + delapan + tigabelas + dualima
	let intrapersonal = tujuh + enambelas + tujuhbelas + duasembilan
	let kinestetik = satu + empatbelas + duatiga + duadelapan
	let naturalis = limabelas + duapuluh + duaenam + tigadua

	const INTELEGENSI = [
		{
			id: 1,
			name: 'Kecerdasan Linguistik',
			point: linguistik,
			deskripsi: `Kecerdasan linguistik dan verbal adalah kemampuan menggunakan kata-kata dan bahasa secara efektif, baik lisan maupun tulisan. Orang yang termasuk ke dalam tipe ini biasanya sangat pandai menulis cerita, menghafal informasi, dan membaca. Ciri-ciri pada tipe kecerdasan ini, yaitu:
		•	Pandai mengingat informasi tertulis dan lisan
		•	Suka membaca dan menulis
		•	Pandai berdebat atau berpidato
		•	Mampu menjelaskan suatu hal dengan baik
		•	Sering mengeluarkan humor ketika bercerita.
		Jika Anda memiliki kecerdasan linguistik dan verbal, maka pilihan karier yang baik untuk Anda, seperti penulis, jurnalis, pengacara, dan guru.`
		},
		{
			id: 2,
			name: 'Kecerdasan Matematika dan Logika',
			point: matLog,
			deskripsi: `Kecerdasan logika dan matematis adalah kemampuan dalam operasi matematika dan menganalisis masalah secara logis. Orang yang masuk ke dalam tipe ini juga pandai dalam penalaran, memiliki keterampilan komputasi, serta mengenali pola dan hubungan antara angka atau simbol. Ciri-ciri pada tipe kecerdasan ini, yaitu:
		•	Dapat memecahkan masalah dengan baik
		•	Suka berpikir tentang ide-ide abstrak
		•	Suka melakukan eksperimen ilmiah
		•	Pandai dalam memecahkan perhitungan yang rumit.
		Jika Anda memiliki kecerdasan logika dan matematis, maka pilihan karier yang baik untuk Anda, yakni ilmuwan, ahli matematika, programer komputer, insinyur, dan akuntan.`
		},
		{
			id: 3,
			name: 'Kecerdasan Visual Spasial',
			point: visualSpace,
			deskripsi: `Kecerdasan visual dan spasial adalah kemampuan untuk memvisualisasikan, membuat, dan memanipulasi sesuatu dalam ruang. Orang yang termasuk ke dalam tipe ini memiliki kemampuan yang baik pada peta, grafik, video, dan gambar. Ciri-ciri pada tipe kecerdasan ini, yaitu:
		•	Hebat dalam menyusun puzzle
		•	Pandai menafsirkan gambar, grafik, dan bagan
		•	Tertarik dalam pemilihan warna-warna
		•	Senang menggambar dan melukis
		•	Menyukai seni rupa
		•	Mengenali suatu pola dengan mudah.
		Jika Anda kuat dalam kecerdasan visual dan spasial, maka pilihan karier yang baik untuk Anda, seperti arsitek, desainer, artis, insinyur, pemain catur, dan pilot.`
		},
		{
			id: 4,
			name: 'Kecerdasan Musik',
			point: musik,
			deskripsi: `Kecerdasan musikal adalah kemampuan untuk mengekspresikan diri, menikmati, mengamati, memahami, dan menciptakan bentuk-bentuk musik. Kecerdasan ini memiliki kepekaan terhadap ritme, suara, nada, dan warna nada. Ciri-ciri pada tipe kecerdasan ini, yaitu:
		•	Senang bernyanyi atau memainkan alat musik
		•	Mudah mengenali pola dan nada musik
		•	Pandai mengingat melodi dan lagu
		•	Memiliki pemahaman yang baik akan struktur musik, ritme, dan not lagu.
		Jika Anda termasuk dalam kecerdasan musikal, maka pilihan karier yang baik untuk Anda, di antaranya pemusik, komponis, penyanyi, guru musik, atau konduktor orkestra.`
		},
		{
			id: 5,
			name: 'Kecerdasan Interpersonal',
			point: interpersonal,
			deskripsi: `Kecerdasan interpersonal adalah kemampuan untuk memahami dan selaras dengan perasaan, emosi, serta temperamen orang lain. Orang dengan kecerdasan ini cenderung pandai berkomunikasi, memahami orang lain, dan bisa bekerja dengan orang lain. Bukan hanya itu, memiliki kecerdasan ini juga terampil dalam menilai emosi, motivasi, keinginan, dan niat orang-orang di sekitarnya. Ciri-ciri pada tipe kecerdasan ini, yaitu:
		•	Pandai berinteraksi secara verbal
		•	Terampil dalam komunikasi non-verbal
		•	Melihat situasi dari berbagai sudut pandang
		•	Menciptakan hubungan yang baik dengan orang lain
		•	Bisa menyelesaikan konflik dalam kelompok dengan baik.
		Jika Anda memiliki kecerdasan interpersonal, maka pilihan karier yang baik untuk Anda meliputi psikolog, filsuf, konselor, pramuniaga, dan politikus.`
		},
		{
			id: 6,
			name: 'Kecerdasan Intrapersonal',
			point: intrapersonal,
			deskripsi: `Kecerdasan intrapersonal adalah kemampuan untuk menyadari dan memahami emosi, perasaan, sifat, pikiran, atau motivasi diri sendiri. Orang dengan kecerdasan ini cenderung senang menganalisis diri, melamun, membuat rencana dan keputusan sendiri, serta menilai kekuatan pribadi yang dimilikinya. Ciri-ciri pada tipe kecerdasan ini, yaitu:
		•	Pandai menganalisis kekuatan dan kelemahan diri sendiri
		•	Senang menganalisis teori dan ide
		•	Memiliki kesadaran diri yang luar biasa
		•	Memahami perasaannya sendiri.
		Jika Anda memiliki kecerdasan intrapersonal, maka pilihan karier yang baik untuk Anda, yakni ilmuwan, ahli teori, filsuf, dan teolog.`
		},
		{
			id: 7,
			name: 'Kecerdasan Kinestetik',
			point: kinestetik,
			deskripsi: `Kecerdasan kinestetik dan jasmani adalah kemampuan dalam menggunakan tubuh secara terampil untuk mengekspresikan diri dan mempelajari atau memecahkan masalah. 
		Kecerdasan ini melibatkan koordinasi, ketangkasan, dan penggunaan seluruh atau bagian tubuh tertentu. Orang yang termasuk ke dalam tipe ini cenderung memiliki kontrol fisik yang sangat baik. Ciri-ciri pada tipe kecerdasan ini, yaitu:
		•	Gemar menari atau olahraga
		•	Senang menciptakan sesuatu dengan tangannya
		•	Cenderung mengingat dengan melakukannya daripada melihat atau mendengar
		•	Pandai mengoordinasikan tangan dan mata.
		Jika Anda termasuk dalam kecerdasan kinestetik dan jasmani, maka pilihan karier yang baik untuk Anda, contohnya penari, pengrajin, atlet, dan aktor.`
		},
		{
			id: 8,
			name: 'Kecerdasan Naturalis',
			point: naturalis,
			deskripsi: `Kecerdasan naturalis adalah kemampuan untuk memahami alam, termasuk tanaman, hewan, lingkungan, dan lainnya. Kecerdasan ini juga dapat mengamati, mengidentifikasi, mengelompokkan, membedakan apa yang ada di alam. 
		Orang dengan kecerdasan ini cenderung tertarik memelihara lingkungan, menjelajahi alam, dan mempelajari spesies lain. Mereka juga memiliki kesadaran yang baik akan terjadinya perubahan pada alam. Ciri-ciri pada tipe kecerdasan ini, yaitu:
		•	Tertarik pada bidang biologi, botani, dan zoologi
		•	Dapat mengkategorikan dan membuat katalog informasi dengan mudah
		•	Senang  berkemah, berkebun, hiking, dan menjelajahi alam terbuka
		•	Mencintai lingkungan.
		Jika Anda termasuk dalam kecerdasan naturalis, maka pilihan karier yang baik untuk Anda, misalnya ahli biologi, konservasionis, nelayan, petani, pemburu, dan pendaki.`
		}
	]

	const _navigate = () => {
		navigation.navigate('Hasil Tes', { list: INTELEGENSI })
	}

	return (
		<QuestionProvider
			value={{
				satu,
				dua,
				tiga,
				empat,
				lima,
				enam,
				tujuh,
				delapan,
				sembilan,
				sepuluh,
				sebelas,
				duabelas,
				tigabelas,
				empatbelas,
				limabelas,
				enambelas,
				tujuhbelas,
				delapanbelas,
				sembilanbelas,
				duapuluh,
				duasatu,
				duadua,
				duatiga,
				duaempat,
				dualima,
				duaenam,
				duatujuh,
				duadelapan,
				duasembilan,
				tigapuluh,
				tigasatu,
				tigadua,
				_handleAnswer,
				linguistik,
				matLog,
				visualSpace,
				musik,
				interpersonal,
				intrapersonal,
				kinestetik,
				naturalis,
				INTELEGENSI,
				_navigate
			}}>
			{children}
		</QuestionProvider>
	)
}
