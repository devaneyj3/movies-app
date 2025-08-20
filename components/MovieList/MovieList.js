import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export default function MovieList({ data }) {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full">
			<CarouselContent>
				{data.map((movie, index) => {
					return (
						<CarouselItem
							key={index}
							className="pl-1 md:basis-1/2 lg:basis-1/3">
							<div className="flex items-center justify-center ">
								<MovieCard key={movie.id} movie={movie} />
							</div>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
