import React, { useState } from 'react';
import './_sidebar.scss';
import ArticleList from '../articlelist/articlelist';
import { staticData } from '../../utils/staticData';

const Navigation = () => {
	// const [open, setOpen] = useState(false);

	// const handleOpenMenu = () => {
	// 	setOpen(!open);
	// };

	return (
		<header>
			<div className='sidenav'>
				<ul>
					{staticData.map((article, index) => {
						return (
							<ArticleList
								title={article.title}
								url={article.url}
								key={index}
								backgroundImageUrl={article.multimedia[1].url}
							/>
						);
					})}
				</ul>
			</div>
		</header>

		// <header>
		// 	{/* Burger Menu Open or Close */}
		// 	<div className='menu-btn' onClick={handleOpenMenu}>
		// 		<span className={open ? 'menu-btn_burger' : 'menu-btn_burger open'}></span>
		// 	</div>

		// 	{/* Navbar Open or Close */}

		// 	<nav className={open ? 'nav' : 'nav open'}>
		// 		<ul className={open ? 'menu-nav' : 'menu-nav open'}>
		// 			<li className={open ? 'menu-nav_item' : 'menu-nav_item open'}>
		// 				<div className='menu-nav_link'>
		// 					<h1 className='nav-links'></h1>Lorem ipsum dolor sit amet consectetur
		// 					adipisicing elit. Repudiandae inventore natus quis. Quia tempore dolorem
		// 					fugiat alias aliquid porro. Dolore, nam quod. Tenetur, dolorem quasi
		// 					doloremque autem, mollitia ipsa rerum id accusamus blanditiis, nostrum
		// 					aperiam minima ea esse recusandae. Corporis earum laborum sequi
		// 					dignissimos aspernatur dolore fugit. Aliquid rerum natus nesciunt ab
		// 					fugiat repellat corporis repudiandae obcaecati, alias quis a dolorem,
		// 					maiores illum aut esse asperiores similique temporibus eveniet, numquam
		// 					assumenda? Iusto dolorum laudantium ullam perspiciatis sint assumenda
		// 					blanditiis beatae hic. Veritatis nulla earum impedit, dolore vero maiores
		// 					rem accusamus enim similique alias? Fuga voluptas quaerat magnam quidem
		// 					iusto recusandae impedit deleniti nisi iste facere veniam repudiandae,
		// 					perspiciatis illo consequatur. Maiores tenetur necessitatibus omnis enim
		// 					asperiores eum aut ut aliquam modi incidunt, ducimus, ad fugiat
		// 					perferendis, nulla rem veritatis voluptas nesciunt. Dicta unde laborum
		// 					quis, quia error dolorem doloribus aliquid explicabo asperiores,
		// 					consectetur dignissimos ex earum nulla. Voluptatem tempora doloremque
		// 					minus est temporibus, consequatur aliquid officia non vel eaque
		// 					exercitationem asperiores, earum dignissimos suscipit quam libero labore.
		// 					Natus excepturi, neque quas quos corporis eligendi voluptates laboriosam
		// 					numquam, maiores magni quo repudiandae eaque? Sequi sapiente nobis illo
		// 					nisi cupiditate at enim quae aperiam sunt esse. Ipsa amet molestias
		// 					consequuntur consectetur suscipit voluptas ipsum qui quasi ratione
		// 					cumque, expedita saepe, laudantium unde ab vitae a recusandae. Voluptate
		// 					minus consectetur dolorem asperiores maiores neque reprehenderit animi
		// 					officiis accusantium. Blanditiis illo ipsum, aliquam harum accusantium
		// 					nostrum iusto inventore consequuntur mollitia nisi consequatur, deserunt
		// 					cum? Et aut ipsam quibusdam labore exercitationem unde harum voluptatibus
		// 					nihil ipsa animi optio asperiores aspernatur nesciunt, repudiandae
		// 					officia? Corrupti qui repellendus error blanditiis voluptas,
		// 					exercitationem recusandae sed excepturi alias provident tempora ipsam.
		// 					Necessitatibus sed incidunt expedita accusantium optio dolorem aperiam
		// 					accusamus et maxime? Error ab exercitationem sit libero aliquam harum
		// 					quam! Voluptate ut itaque deleniti aspernatur maiores provident
		// 					obcaecati, saepe necessitatibus iure, cupiditate debitis, expedita vitae
		// 					reprehenderit! Facilis ut placeat, quibusdam repellendus vel corporis
		// 					est. Odio officiis, repellendus architecto, optio omnis soluta autem
		// 					quidem quis minus ad sapiente totam quos quo? Sequi similique voluptatem
		// 					nam laborum natus officiis expedita deserunt, iste tempora sapiente nulla
		// 					totam facere qui provident, eum sint porro ex rerum, aliquam quam
		// 					voluptatibus hic. Veritatis tempore repudiandae esse natus facere,
		// 					inventore quia eius voluptate optio laborum. Aperiam quam similique qui
		// 					accusamus est sequi voluptas. Obcaecati vitae doloribus impedit, modi
		// 					veritatis eligendi? Pariatur tenetur provident itaque asperiores maiores
		// 					eum delectus tempora perspiciatis totam inventore ut a possimus, expedita
		// 					eos hic alias? Autem culpa error quidem voluptatum? Iusto iure quos
		// 					deserunt adipisci hic enim commodi voluptatibus debitis perferendis omnis
		// 					reprehenderit esse nesciunt ipsam nisi eligendi autem, consequatur aut
		// 					tempora optio a veniam exercitationem? Harum eveniet nulla, in eum ipsum
		// 					officia enim placeat nam dolorem ut aperiam delectus quia voluptate
		// 					perferendis cum consectetur, minus inventore quasi exercitationem
		// 					voluptatibus culpa repellendus? Voluptatibus labore, tempore sint dolorem
		// 					ratione quidem deleniti perferendis exercitationem quasi nisi dignissimos
		// 					veniam nostrum expedita. Ratione, expedita ut accusantium amet rem saepe
		// 					provident repudiandae sequi? Officiis cupiditate minima aliquam eveniet
		// 					saepe asperiores neque expedita aut quasi molestiae quam quis
		// 					repudiandae, dolor veniam ab deserunt officia voluptates. Iste facilis
		// 					reiciendis odio sint sit. Corporis quasi exercitationem optio animi earum
		// 					officiis, ad labore obcaecati dolor ipsa et recusandae, illo distinctio
		// 					delectus soluta. Assumenda vel officiis eaque modi hic ipsa quis nesciunt
		// 					laborum ex illo esse earum, ducimus optio aperiam! Modi tempore harum
		// 					numquam, hic veniam earum quasi! Nam sunt laborum ea perspiciatis, ab
		// 					aperiam est delectus non excepturi voluptatibus eaque, repellat maiores,
		// 					reprehenderit aliquid quisquam explicabo enim recusandae iste omnis
		// 					atque. Repellendus tempore, sint fugiat quia sit asperiores quaerat amet
		// 					commodi veniam laudantium ea eaque quas maxime earum labore suscipit nisi
		// 					corrupti. Architecto, deleniti harum. Iste ipsa repudiandae dolores
		// 					quibusdam quaerat corrupti, tenetur, doloribus nemo necessitatibus nam
		// 					accusamus commodi veritatis quam quisquam nisi quod ad? Inventore aperiam
		// 					est ducimus minus nisi deserunt quibusdam dignissimos beatae itaque
		// 					voluptatum animi explicabo culpa velit, ipsum suscipit vero eveniet
		// 					repellat, officiis, eos ut excepturi dolor exercitationem consequuntur?
		// 					Ab, necessitatibus. Dolore ab obcaecati cum voluptatibus? Quibusdam a
		// 					deserunt non praesentium reiciendis nobis. Veritatis laudantium officiis
		// 					placeat mollitia ratione distinctio, porro ullam quasi voluptatum
		// 					excepturi obcaecati omnis culpa nulla dolores odio quis. Incidunt
		// 					accusamus repellendus nesciunt cumque ducimus doloremque? Recusandae
		// 					nesciunt voluptates quasi quae voluptatem corrupti enim totam,
		// 					consectetur iusto vero! Nobis animi mollitia iure. Exercitationem placeat
		// 					aut, expedita porro sunt nihil ea beatae debitis ipsum provident odit
		// 					quos, culpa ratione vel voluptatem suscipit enim eaque. Accusantium
		// 					itaque nemo porro quas enim dolore in consectetur dolores iure at,
		// 					veritatis eveniet, voluptas eius, magnam nihil natus corporis dignissimos
		// 					deserunt temporibus est aliquid aperiam. Eum nostrum officiis aliquam
		// 					esse adipisci perspiciatis vitae atque voluptate, numquam aperiam!
		// 					Nostrum harum voluptate, dolorem eveniet rem, nisi veritatis earum
		// 					cupiditate, ea iusto atque culpa quis illo? Enim amet maiores quisquam
		// 					nemo necessitatibus, nihil consequuntur esse sit expedita, autem dicta
		// 					voluptatibus impedit eveniet quam odio, iusto eligendi? Quod, labore
		// 					totam natus asperiores recusandae, sequi error est eligendi, a doloribus
		// 					hic suscipit deleniti quis incidunt aperiam quo ex provident. Magnam, nam
		// 					minima corrupti deleniti libero voluptas tempore fugiat odio optio
		// 					corporis! Minima sed quos quae impedit sunt corporis doloremque. Nulla
		// 					perferendis, laborum beatae quisquam omnis necessitatibus excepturi rem
		// 					inventore illum consectetur quos saepe. Architecto laboriosam corrupti
		// 					assumenda eius. Quibusdam debitis asperiores distinctio amet, totam
		// 					laudantium possimus expedita placeat accusantium voluptatibus nisi harum
		// 					qui architecto sunt suscipit, perferendis iusto? Explicabo totam in id
		// 					tempora ab. Harum nostrum laboriosam, reiciendis adipisci mollitia at
		// 					veniam perspiciatis, dolores odit ducimus deleniti itaque minus a. Rerum
		// 					ullam temporibus asperiores maiores laborum sit saepe doloribus fuga ad
		// 					ut pariatur, amet in esse quod quae possimus aliquid optio perferendis
		// 					facere! Soluta nulla enim culpa repellat libero consequatur quis fugiat
		// 					aliquid necessitatibus, laborum eveniet! Earum voluptatibus quia quam
		// 					quibusdam eligendi ducimus minima harum libero, vel iusto? Minima,
		// 					suscipit? Sunt, quis. Numquam consectetur excepturi libero praesentium
		// 					quasi distinctio odio nihil adipisci natus magni? Doloremque reiciendis
		// 					placeat ut odio voluptatibus possimus culpa, laborum ullam repudiandae
		// 					recusandae porro cumque, quod corporis omnis reprehenderit eveniet est
		// 					rerum suscipit vitae dignissimos dolorum exercitationem hic dolore quos.
		// 					Totam, nam.
		// 				</div>
		// 			</li>
		// 		</ul>
		// 	</nav>
		// </header>
	);
};

export default Navigation;
