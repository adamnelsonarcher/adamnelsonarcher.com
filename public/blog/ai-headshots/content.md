<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">Recently I decided that my headshot was outdated, and that I needed to create a new one. I basically had to pay for a headshot, get a suit, go somewhere to get a picture, all that greatness. I am someone who uses a lot of generative models for my work and school, and I wanted to see to what extent I can generate professional pictures of myself without paying for anything, and without putting in more work than actually getting a headshot.</span></p>
<p>&nbsp;</p>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">I ended up paying for two different services, as I got really in to this problem, but this will focus on what I was able to do for free.&nbsp;</span><br>&nbsp;</p>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">Note: I have an RTX 3070, so this gives me the ability to run a lot of these models that have high resource demand. However, most of the programs I am running can be run in small batches on cloud computing services for free.</span></p>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">Some examples I found online, using stable diffusion:</span></p>
<ul style="list-style-type:square;">
    <li>
        <p style="margin-left:0pt;"><a target="_blank" rel="noopener noreferrer" href="https://huggingface.co/spaces/sczhou/CodeFormer"><span style="color:rgb(28,28,28);font-family:Arimo, Arial;"><u>https://huggingface.co/spaces/sczhou/CodeFormer</u></span></a></p>
    </li>
    <li>
        <p style="margin-left:0pt;"><a target="_blank" rel="noopener noreferrer" href="https://huggingface.co/spaces/pharmapsychotic/CLIP-Interrogator"><span style="color:rgb(28,28,28);font-family:Arimo, Arial;"><u>https://huggingface.co/spaces/pharmapsychotic/CLIP-Interrogator</u></span></a></p>
    </li>
    <li>
        <p style="margin-left:0pt;"><a target="_blank" rel="noopener noreferrer" href="https://gigantic.work/"><span style="color:rgb(28,28,28);font-family:Arimo, Arial;"><u>https://gigantic.work/</u></span></a></p>
    </li>
</ul>
<p><br>&nbsp;</p>
<p style="margin-left:auto;">&nbsp;</p>
<h2 style="margin-left:auto;"><span style="color:rgb(0,0,0);"><strong>Baseline/Training Images</strong></span></h2>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;"><strong>Here are some images of myself that I used in this process. I used several images in various lighting conditions, and I used the same images for each model I trained.</strong></span></p>
<figure class="image"><img src="/blog/ai-headshots/1.png"></figure>
<figure class="image"><img src="/blog/ai-headshots/2.jfif"></figure>
<figure class="image"><img src="/blog/ai-headshots/3.jfif"></figure>
<h2 style="margin-left:0pt;"><span style="color:rgb(0,0,0);font-family:Arimo, Arial;font-size:25pt;"><strong>Stable Diffusion</strong></span></h2>
<h3 style="margin-left:0pt;"><span style="font-family:Arimo, Arial;font-size:20pt;">Model Selection</span></h3>
<h4 style="margin-left:0pt;"><span style="color:rgb(0,0,0);font-family:Arimo, Arial;">Juggernaut</span></h4>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">I played around with a lot of models seeing what worked well for this task, while also not taking a ridiculous amount of time. I ended up using an SDXL model, even though FLUX models are the latest and greatest thing right now. It takes me about 30 seconds to generate a batch of 4 images with SDXL, and close to 5 minutes using FLUX. I used a lot of SDXL models in this process, and I settled on </span><a target="_blank" rel="noopener noreferrer" href="https://civitai.com/models/133005/juggernaut-xl"><span style="color:rgb(213,87,85);font-family:Arimo, Arial;"><u>Juggernaut</u></span></a><span style="font-family:Arimo, Arial;">.</span></p>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">because it seemed pretty optimized for working with faces. I also used a </span><a target="_blank" rel="noopener noreferrer" href="https://huggingface.co/h94/IP-Adapter-FaceID/tree/main"><span style="color:rgb(213,87,85);font-family:Arimo, Arial;"><u>Lora from FaceID</u></span></a><span style="font-family:Arimo, Arial;">, but I don't think this was necessary, as I ended up not really modifying my face from existing images. (This will make sense after I explain the process used).</span></p>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">Juggernaut is great, and was already creating realistic images, before any amount of fine-tuning for my face.</span></p>
<figure class="image"><img src="/blog/ai-headshots/4.jfif"></figure>
<figure class="image"><img src="/blog/ai-headshots/5.jfif"></figure>
<figure class="image"><img src="/blog/ai-headshots/5.jfif"></figure>
<p style="margin-left:0pt;">Images generated by Juggernaut, created from set seeds off of the model site</p>
<h4 style="margin-left:auto;"><span style="color:rgb(0,0,0);">RooP extension</span></h4>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">This is the first thing I really tried, as this is an extension that exists only to transplant faces into generated images. </span><a target="_blank" rel="noopener noreferrer" href="https://github.com/s0md3v/sd-webui-roop"><span style="color:rgb(213,87,85);font-family:Arimo, Arial;"><u>(Link to RooP)</u></span></a><span style="font-family:Arimo, Arial;"> I created a couple of models within the RooP interface, and they all performed about the same. I got some decent results, but most here were not very good.</span></p>
<h4 style="margin-left:auto;"><span style="color:rgb(0,0,0);">SDXL VAE</span></h4>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">I found this process in a </span><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/_0m0R954ZOo?si=n41Hh8Snz4Lnx_KK"><span style="color:rgb(213,87,85);font-family:Arimo, Arial;"><u>YouTube video</u></span></a><span style="font-family:Arimo, Arial;">, and it is a pretty interesting pipeline. Definitely worth checking out, I can see this being helpful for a large scale face swap with different source faces for each target face. With relatively little source information, it can move a face, and adapt to context pretty well. I would not recommend this for what I am doing, as there is a lot of work/overhead on this process, and I got very similar results to the other zero-shot processes.</span></p>
<h4 style="margin-left:auto;"><span style="color:rgb(0,0,0);">Img2Img Inpainting</span></h4>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">This is what I played around with the most, and ended up using in combination with other processes to create my final dataset. Here, I just took pictures of myself and painted over my face, and generated the rest of the image, using a denoising strength of ~0.6.</span></p>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">This allowed me to maintain a lot of the image context while still altering the clothing and background. I later used Photoshop to correct any color or lighting issues between my face and the generated image, which I will outline in the next section. This is the most time-consuming method out of these, but by far produced the best results.&nbsp;</span></p>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">A lot of this was just changing the denoising strength, the prompts, and the inpaint mask to see what I am able to create. Some of the generated images are below</span></p>
<p style="margin-left:auto;">&nbsp;</p>
<p style="margin-left:0pt;">Acceptable and poor results with Img2Img inpainting. The poor results are from improper denoising and masking parameters.</p>
<p>&nbsp;</p>
<p style="margin-left:0pt;">Note that these faces are the same as the ones shown at the top of this page.</p>
<p style="margin-left:auto;">&nbsp;</p>
<p style="margin-left:auto;">&nbsp;</p>
<h2><span style="color:rgb(0,0,0);font-family:Arimo, Arial;font-size:25pt;"><strong>Paid Services</strong></span></h2>
<h4 style="margin-left:auto;"><span style="color:rgb(0,0,0);">"Try It On"</span></h4>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">I paid $19 for 300 credits at </span><a target="_blank" rel="noopener noreferrer" href="http://studio.tryiton.com/"><span style="color:rgb(213,87,85);font-family:Arimo, Arial;"><u>TryItOn</u></span></a><span style="font-family:Arimo, Arial;">, which is the same as generating about 80 images. They advertise a fully contained experience, saying they can assure that generations will be hallucination-free. I was moderately satisfied with the results, but I didn't end up using any of the pictrues that I generated. I found much better results with an image prompt, rather than just a text input. It works a lot like stable diffusion prompting (with positive and negative prompts), so it is easy to use if you are familiar with that. In the end, probably would not recommend this service, as a lot of the images were not that similar to me without some retouching. I actually used one of these images as this site's homepage image.</span></p>
<p style="margin-left:auto;">&nbsp;</p>
<p style="margin-left:auto;"><span style="color:rgb(28,28,28);">TryItOn Result, Good</span></p>
<p style="margin-left:auto;"><span style="color:rgb(28,28,28);">TryItOn Result, Bad</span></p>
<h4 style="margin-left:auto;"><span style="color:rgb(0,0,0);">Artisse</span></h4>
<p style="margin-left:0pt;"><a target="_blank" rel="noopener noreferrer" href="http://artisse.ai/"><span style="color:rgb(213,87,85);font-family:Arimo, Arial;"><u>Artisse (artisse.ai)</u></span></a><span style="font-family:Arimo, Arial;"> is pretty decent for the price. I paid $3 to generate about 20 images. It does not work well with text prompts, but it is pretty decent with image prompts. One thing I did that worked pretty well was using images generated from Stable Diffusion or TryItOn as prompts. They are already pretty similar to my face structure and I got some decent results. I had some technical difficulties with this app, as it took over a day to generate a single image on two occasions. Other times it took about 60 seconds, and you are only allowed to generate one image at a time.</span></p>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">This app took about 10 minutes to set up, and was pretty cheap. It was a lot faster and resource effecient than other solutions.</span></p>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">Here are some images generated from this app.&nbsp;</span></p>
<p style="margin-left:0pt;">&nbsp;</p>
<p style="margin-left:auto;"><span style="color:rgb(28,28,28);">Artisse Result, Good</span></p>
<p style="margin-left:auto;">&nbsp;</p>
<p style="margin-left:auto;">&nbsp;</p>
<h2 style="margin-left:auto;"><span style="color:rgb(0,0,0);"><strong>Photo Polishing &amp; Photoshop</strong></span></h2>
<p style="margin-left:0pt;"><span style="font-family:Arimo, Arial;">Photoshop does cost money,<strong> </strong>but I just use </span><a target="_blank" rel="noopener noreferrer" href="https://www.photopea.com/"><span style="color:rgb(213,87,85);font-family:Arimo, Arial;"><u>Photopea</u></span></a><span style="font-family:Arimo, Arial;">, which has a lot of the same functionality. It was free and allowed you to make small changes to facial structure. I took a lot of the best images from the last couple of methods and made changes to see if I could get them working. I also took AI-generated versions of myself, and added real photos of my face onto them in Photoshop. Results are mixed. Some of these still do not look like me, but this was just general polishing of some of the images generated here.</span></p>
<p style="margin-left:auto;">&nbsp;</p>
<p style="margin-left:auto;">&nbsp;</p>
<p style="margin-left:auto;"><span style="color:rgb(28,28,28);">Pretty good one, now my LinkedIn photo</span></p>